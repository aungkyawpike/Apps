var mongo = require('mongodb');
var mongoClient = mongo.MongoClient;
var gridfs = require('gridfs-stream');
var multer  = require('multer');
var gridfsStorage = require('multer-gridfs-storage');
var path = require('path');
var crypto = require('crypto');

class MongoDBService {

    constructor() {
        this.dbUrl = 'mongodb://localhost:27017/test';
        this.db = null;
        this.gfs = null;
        this.upload = null;
    }

    async start() {
        try {
            await this.connect(this.dbUrl);
            console.log('connected to Mongodb.');
        }
        catch(err){
            console.log('Unable to connect to Mongodb.' + err);
            process.exit(1);
        }
    }

    async connect(url) {
        if (this.db)
            return;
        try{
            this.db = await mongoClient.connect(url);
            this.gfs = gridfs(this.db, mongo);
            var storage = gridfsStorage({
                gfs: this.gfs,
                identifier: function (req, file, cb) {
                    cb(null, Math.floor(Math.random() * 1000000));
                },
                filename: function (req, file, cb) {
                    crypto.randomBytes(16, function (err, raw) {
                        cb(err, err ? undefined : raw.toString('hex') + path.extname(file.originalname));
                    });
                },
                metadata: function (req, file, cb) {
                    cb(null, JSON.parse(JSON.stringify(req.body)));
                },
                log: function (err, log) {
                    if (err) {
                        console.error(err);
                    } else {
                        console.log(log.message, log.extra);
                    }
                }
            });
            this.upload = multer({storage: storage});
        }
         catch(err){
             throw err;
         }
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



