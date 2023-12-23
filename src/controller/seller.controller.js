const mongoClient = require('../mongo-core/mongo-client');
const uuid = require('uuid');
const Seller = require('../model/seller-model');

class SellerController {

    async createSeller(seller) {

        return await mongoClient.connect()
            .then(async () => {

                seller = new Seller(seller);

                this.validateSeller(seller);

                seller.apiKey = uuid.v4();

                return await seller.save()
                    .then(this.onSuccessSaveSeller)
                    .catch(this.onErrorSaveSeller);

            })
            .catch(this.onErrorSaveSeller);

    }

    onSuccessSaveSeller(seller) {
        return {message: 'Seller created successfully: ' + JSON.stringify(seller)};
    }

    onErrorSaveSeller(err) {
        throw new Error("Error inserting document " + err.message);
    }

    validateSeller(seller) {

        const objValidator = [];

        if (!seller.cnpj) {
            objValidator.push({error: 'CNPJ is required'})
        }

        if (!seller.name) {
            objValidator.push({error: 'Name is required'})
        }

        if (objValidator.length > 0) {
            throw new Error(JSON.stringify(objValidator));
        }

    }

}

module.exports = new SellerController();
