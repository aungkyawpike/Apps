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
    .post( // single post
        upload.array('files',12),
        async (req, res, next) => {
            delete req.files.metada;
            res.json(await productService.postProducts(req.body));
    })
    .put(async (req, res, next) => {
        res.json(await productService.putProducts(req.body));
    })
    .delete(async(req, res, next) => {
        res.json(await productService.deleteProducts(req.body));
    });

// api/products/upload/:filenames
router.route('/upload/:filenames')
    .get(async (req, res, next) => {
        return await productService.getUploadFileStream(req.params.filename, res);
    })

module.exports = router;
