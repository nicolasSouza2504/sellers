const {Router} = require("express");
const routes = new Router();
const sellerController = require("../controller/seller.controller")

routes.post("/seller", async (req, res) => {

    try {

        let objResult = await sellerController.createSeller(req.body)

        return res.status(200).json(objResult);

    } catch (error) {
        return res.status(500).json({error: error.message});
    }

});

module.exports = routes;
