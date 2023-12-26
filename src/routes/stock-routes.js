const {Router} = require("express");
const routes = new Router();
const stockController = require("../controller/stock.controller")

routes.get("/stock", async (req, res) => {

    try {

        if (!req.headers.apikey) {
            return res.status(401).json({error: 'Authentication failed'});[]
        }

        let objResult = await stockController.getStock(req.headers.apikey);

        return res.status(200).json(objResult);

    } catch (error) {

        if (error.statusCode) {
            return res.status(error.statusCode).json({error: error.message});
        }

        return res.status(500).json({error: error.message});

    }

});

module.exports = routes;
