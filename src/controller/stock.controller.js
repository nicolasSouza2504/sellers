const sellerController = require("../controller/seller.controller");
const HttpError = require("../model/http-error-model");

class StockController {

    async getStock(apiKey) {

        const seller = await sellerController.getSellerByApiKey(apiKey);

        if (!seller) {
            throw new HttpError('Authentication failed', 401);
        }

        //TODO populate products from database
        const objResult = {
            products: []
        }

        return objResult;
    }

}

module.exports = new StockController();
