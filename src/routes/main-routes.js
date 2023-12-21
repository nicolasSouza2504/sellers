const sellerRoutes = require('./seller-routes');
const pingRoute = require('./ping-route');

const mainApi = {
    apis: [
        sellerRoutes,
        pingRoute
    ]
}

module.exports = mainApi;
