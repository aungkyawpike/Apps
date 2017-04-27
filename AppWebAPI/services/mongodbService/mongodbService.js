var mongoClient = require('mongodb').MongoClient;
var multer  = require('multer');
var gridfs = require('multer-gridfs-storage');
var crypto = require('crypto');
var path = require('path');

class MongoDBService {

    constructor() {
        this.db = null;
        this.upload = null;
    }

    connect(url,done) {
        var mongoDBService = this;
        if (mongoDBService.db) return done();
        mongoClient.connect(url, function (err, db) {
            if (err) return done(err);
            mongoDBService.db = db;
            done();
        })
    }

    connectGridFS(url) {
        var gridfsStorage = gridfs({
            url: url,
            identifier: function(req, file, cb) {
                cb(null, Math.floor(Math.random() * 1000000));
            },
            filename: function(req, file, cb) {
                crypto.randomBytes(16, function (err, raw) {
                    cb(err, err ? undefined : raw.toString('hex') + path.extname(file.originalname));
                });
            },
            metadata: function(req, file, cb) {
                cb(null, req.body);
            },
            log: function(err, log) {
                if (error) {
                    console.error(err);
                } else {
                    console.log(log.message, log.extra);
                }
            }
        });
        this.upload = multer({ storage: gridfsStorage });
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



