const express = require("express");
const mainRoutes = require("./routes/main-routes");

class App {

    constructor() {

        this.server = express();

        this.middlewares();

        this.routes();

    }

    middlewares() {
        this.server.use(express.json());
    }

    routes() {

        mainRoutes.apis.forEach(api => {
            this.server.use(api);
        });

    }

}

module.exports = new App().server;
