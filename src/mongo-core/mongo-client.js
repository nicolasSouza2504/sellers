const MongoClient = require('mongodb').MongoClient;

class Client {

    url = "mongodb+srv://nicolas:new_db@cluster0.asivu13.mongodb.net/?retryWrites=true&w=majority";;
    client = null;

    constructor() {
        this.client = new MongoClient(this.url, { useUnifiedTopology: true });
    }

    connect() {
        return this.client.connect();
    }

    close() {
        return this.client.close();
    }

    getDb() {
        return this.client.db('sellers');
    }

}

module.exports = new Client();
