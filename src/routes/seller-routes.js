const {Router} = require("express");
const routes = new Router();
const sellerController = require("../controller/seller.controller")

routes.get("/ping", (req, res) => {
    return res.status(200).json({message: 'pong'});
});

routes.post("/seller", async (req, res) => {

    const msgresult = await sellerController.createSeller()

    return res.status(200).json('{\"message\": \"' + msgresult + '\"}');

});

module.exports = routes;
