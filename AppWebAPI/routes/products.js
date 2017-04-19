var express = require('express');
var router = express.Router();
var mongoDBService = require('../services/mongodbService/mongodbService');

// api/products
router.route('/')
    .get(async (req, res, next) => {
        try {
            var result = await mongoDBService.db.collection('products')
                .find()
                .toArray();
            res.json(result);
        }
        catch(e){
            res.json({products: []});
        }
    })
    .post(async (req, res, next) => {
        try {
            var result = await mongoDBService.db.collection('products').insertMany(req.body.products);
            res.json(result);
        }
        catch(e){
            res.json({products: []});
        }
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
