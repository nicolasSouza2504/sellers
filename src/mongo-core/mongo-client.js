const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');

class Client {

    url = "mongodb+srv://nicolas:new_db@cluster0.asivu13.mongodb.net/seller_db?retryWrites=true&w=majority";

    constructor() {
        return this;
    }

    connect() {
        return mongoose.connect(this.url, {useNewUrlParser: true, useUnifiedTopology: true});
    }

}

module.exports = new Client();
