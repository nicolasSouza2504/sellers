const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');

class Client {

    url = "****************";

    constructor() {
        return this;
    }

    connect() {
        return mongoose.connect(this.url, {useNewUrlParser: true, useUnifiedTopology: true});
    }

}

module.exports = new Client();
