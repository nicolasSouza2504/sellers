const mongoClient = require('../mongo-core/mongo-client');
const Seller = require('../model/seller-model');

class SellerController {

    async createSeller(seller) {

        return await mongoClient.connect()
            .then(async () => {

                seller = new Seller(seller);

                return await seller.save()
                    .then(this.onSuccessSaveSeller)
                    .catch(this.onErrorSaveSeller);

            })
            .catch(this.onErrorSaveSeller);

    }

    onSuccessSaveSeller() {
        return {message: 'Seller created successfully'};
    }

    onErrorSaveSeller(err) {
        throw new Error("Error inserting document " + err.message);
    }
}

module.exports = new SellerController();
