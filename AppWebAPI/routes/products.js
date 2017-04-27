var express = require('express');
var router = express.Router();
var multer  = require('multer');
var productService = require('../modules/products/productsService');
var storeManager = require('../services/StoreManager');
var upload = storeManager.dbService.upload;

// api/products
router.route('/')
    .get(async (req, res, next) => {
        var result = await productService.getProducts();
        res.json(result);
    })
    /*.post(
        upload.array('photos', 12),
        async (req, res, next) => {
        res.json(await productService.postProducts(req.body.products));
    })*/
    .delete(function(req, res, next) {
        res.json({message: 'DELETE api/products'});
    });

// api/products:productId
router.route('/:productId')
    .get(function(req, res, next) {
        res.json({message: 'GET api/products:productId - ' + req.params.productId});
    })
    .post(
        upload.array('photos', 12),
        async (req, res, next) => {
            res.json(await productService.postProduct(req.body.product));
        }
    )
    .put(
        upload.array('photos', 12),
        async (req, res, next) => {
            res.json(await productService.postProduct(req.body.product));
        }
    )
    .delete(function(req, res, next) {
        res.json({message: 'DELETE api/products:productId - '+ req.params.productId});
    });

module.exports = router;
