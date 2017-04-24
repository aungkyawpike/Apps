var express = require('express');
var router = express.Router();
var productService = require('../modules/products/productsService');

var storage = require('multer-gridfs-storage')({
    url: 'mongodb://localhost:27017/test',
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
var upload = multer({ storage: storage });

// api/products
router.route('/')
    .get(async (req, res, next) => {
        var result = await productService.getProducts();
        res.json(result);
    })
    .post(
        upload.array('photos', 12),
        async (req, res, next) => {
        res.json(await productService.postProducts(req.body.products));
    })
    .delete(function(req, res, next) {
        res.json({message: 'DELETE api/products'});
    });

// api/products:productId
router.route('/:productId')
    .get(function(req, res, next) {
        res.json({message: 'GET api/products:productId - ' + req.params.productId});
    })
    .put(function(req, res, next) {
        res.json({message: req.body.name});
    })
    .delete(function(req, res, next) {
        res.json({message: 'DELETE api/products:productId - '+ req.params.productId});
    });

module.exports = router;
