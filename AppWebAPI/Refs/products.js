var express = require('express');
var cors = require('cors')
var router = express.Router();
var multer  = require('multer');
var productService = require('../modules/products/productsService');
var storeManager = require('../services/StoreManager');
var upload = storeManager.dbService.upload;
router.use(cors());

// api/products
router.route('/')
    .get(async (req, res, next) => {
        var result = await productService.getProducts(req.params);
        res.json(result);
    })
    .post(async (req, res, next) => {
        upload.array('files',12),
        res.json(await productService.postProducts(req.body));
    })
    .put(async (req, res, next) => {
        res.json(await productService.putProducts(req.body));
    })
    .delete(async(req, res, next) => {
        res.json(await productService.deleteProducts(req.body));
    });

// api/products:productId
/*router.route('/:_id')
    .get(async (req, res, next) => {
        var result = await productService.getProduct(parseInt(req.params._id));
        res.json(result);
    })
   .post(
        upload.array('files',12),
        async (req, res, next) => {
        res.json(await productService.postProduct(req.body));
    })
    .put(async (req, res, next) => {
        res.json(await productService.putProduct(parseInt(req.params._id),req.body));
    })
        .delete(async (req, res, next) => {
        res.json(await productService.deleteProduct(parseInt(req.params._id)));
    });*/

module.exports = router;
