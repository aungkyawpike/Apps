var express = require('express');
var router = express.Router();

// api/products
router.route('/')
    .get(function(req, res, next) {
        res.json({message: 'GET api/products'});
    })
    .post(function(req, res, next) {
        console.log(req.body);
        res.json({
            message: 'POST api/products',
            echo: req.body.products
        });
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
