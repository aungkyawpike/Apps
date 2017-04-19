var express = require('express');
var router = express.Router();
var mongoDBService = require('../services/mongodbService/mongodbService');
var productService = require('../modules/products/productsService');

// api/products
router.route('/')
    .get(async (req, res, next) => {
        var result = await productService.getProducts();
        res.json(result);
    })
    .post(async (req, res, next) => {
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
