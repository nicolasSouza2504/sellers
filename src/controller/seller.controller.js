const mongoClient = require('../mongo-core/mongo-client');
const Seller = require('../model/seller-model');

class SellerController {

    async createSeller(jsonSeller) {

        await mongoClient.connect().then(async () => {

            const collection = mongoClient.getDb().collection('seller');

            const seller = new Seller('Nicolas', 66666666);

            const result = await collection.insertOne(seller)
                .then((result) => {
                    console.log('Document inserted successfully' + result);
                }).catch((err) => {
                    console.error('Error inserting document:', err);
                });

        }).catch(err => {
            console.log(err);
        }).finally(() => {

            return 'Seller created successfully';

        });

    }

}

module.exports = new SellerController();
