var express = require('express');
var router = express.Router();
var mongodb = require('../services/mongodbService/mongodbService');

// api/products
router.route('/')
    .get(async (req, res, next) => {
        try {
            mongodb.get().collection('products').find()
                .toArray((err, products)=>{
                    res.json({products: products});
                    mongodb.close();
                });
        }
        catch(e){
            res.json({products: []});
        }
    })
    .post(async (req, res, next) => {
        try {
            var result = await mongodb.get().collection('products').insertMany(req.body.products);
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
        res.json({message: 'GET api/products:productId -' + req.params.productId});
    })
    .put(function(req, res, next) {
        res.json({message: req.body.name});
    })
    .delete(function(req, res, next) {
        res.json({message: 'DELETE api/products:productId -'+ req.params.productId});
    });

module.exports = router;
