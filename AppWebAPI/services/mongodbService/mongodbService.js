var MongoClient = require('mongodb').MongoClient;

class MongoDBService {

    constructor() {
        this.db = null;
     }

    connect(url, done) {
        var mongoDBService = this;
        if (mongoDBService.db) return done();

        MongoClient.connect(url, function (err, db) {
            if (err) return done(err);
            mongoDBService.db = db;
            done();
        })
    }

    close(done) {
        var mongoDBService = this;
        if (mongoDBService.db) {
            mongoDBService.db.close(function (err, result) {
                mongoDBService.db = null;
            })
        }
    }
}

module.exports = new MongoDBService()



