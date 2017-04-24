var mongoClient = require('mongodb').MongoClient;
var gridfsStorage = require('multer-gridfs-storage');
var multer  = require('multer');
var crypto = require('crypto');
var path = require('path');

class MongoDBService {

    constructor(dbUrl) {
        this.db = null;
        this.dbURL = dbUrl;
        initializeGridFS();
    }

    initializeGridFS() {
        var storage = gridfsStorage({
            url: dbUrl,
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
        this.upload = multer({ storage: storage });
    }

    connect(done) {
        var mongoDBService = this;
        if (mongoDBService.db) return done();

        mongoClient.connect(url, function (err, db) {
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

module.exports = new MongoDBService('mongodb://localhost:27017/test')



