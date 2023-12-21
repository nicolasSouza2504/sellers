const {Router} = require("express");
const routes = new Router();

routes.get("/ping", async (req, res) => {

    res.header("Content-Type",'application/json');

    let objResponse = {};

    objResponse.message = "pong";

    return res.status(200).json(objResponse);

});

module.exports = routes;
