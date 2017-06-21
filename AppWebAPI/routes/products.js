var express = require('express');
var cors = require('cors')
var router = express.Router();
var multer  = require('multer');
var upload = multer();
var productService = require('../modules/products/productsService');
var storeManager = require('../services/StoreManager');
var uploadGridFS = storeManager.dbService.uploadGridFS;
router.use(cors());

// api/products
router.route('/')
    .get(async (req, res, next) => {
        var result = await productService.getProducts(req.query);
        res.json(result);
    })
    .post( // single post
        upload.array('files', 12),
        async (req, res, next) => {
            req.body.files = req.files;
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
