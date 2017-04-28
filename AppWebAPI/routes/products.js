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
    .post(async (req, res, next) => {
        res.json(await productService.postProducts(req.body.products));
    })
    .put(async (req, res, next) => {
        res.json(await productService.putProducts(req.body.products));
    })
    .delete(async(req, res, next) => {
        res.json(await productService.deleteProducts(req.body._ids));
    });

// api/products:productId
router.route('/:_id')
    .get(async (req, res, next) => {
        var result = await productService.getProduct(parseInt(req.params._id));
        res.json(result);
    })
    .post(
        upload.array('photos', 12),
        async (req, res, next) => {
        res.json(await productService.postProduct(req.body.product));
    })
    .put(async (req, res, next) => {
        res.json(await productService.putProduct(parseInt(req.params._id),req.body.product));
    })
    .delete(async (req, res, next) => {
        res.json(await productService.deleteProduct(parseInt(req.body._id)));
    });

module.exports = router;
