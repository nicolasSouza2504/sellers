const sellerRoutes = require('./seller-routes');
const pingRoute = require('./ping-route');
const stockRoutes = require('./stock-routes');

const mainApi = {
    apis: [
        sellerRoutes,
        pingRoute,
        stockRoutes
    ]
}

module.exports = mainApi;
