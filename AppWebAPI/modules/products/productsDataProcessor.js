var mongoDBService = require('../../services/mongodbService/mongodbService');
var ObjectID = require('mongodb').ObjectID;

class productsDataProcessor{

    async getProducts(_ids){
        try {
            if(_ids && _ids.length === 0) { //get all
                return await mongoDBService.db.collection('products')
                    .find()
                    .toArray();
            }
            else{
                const obj_ids = _ids.map(function(_id) { return ObjectID(_id); });
                return mongoDBService.db.collection('products')
                                        .find({_id: {$in: obj_ids}})
                                        .toArray();
            }
        }
        catch(e){
            console.log(e);
            return e;
        }
    }

    async postProducts(product){
        try {
            if(product) {
                return await mongoDBService.db.collection('products').insertOne(product);
            }
            return [];
        }
        catch(e){
            console.log(e);
            return e;
        }
    }

    async putProducts(products){
        try {
            var responses = []
            if(products && products.length > 0) {
                for (var product of products) {
                    var response = await mongoDBService.db.collection('products')
                        .replaceOne({_id: product._id}, product, {upsert: true});
                    responses.push(response)
                }
            }
            return responses
        }
        catch(e){
            console.log(e);
            return e;
        }
    }

    async deleteProducts(_ids){
        try {
            if(ids && _ids.length === 0) {
                return await mongoDBService.db.collection('products').remove({_id: {'$in': _ids}});
            }
        }
        catch(e){
            console.log(e);
            return e;
        }
    }

    async getUploadFileStream(filenames, res) {
        try {
            if(filename && res) {
                var files = await mongoDBService.gfs.files.find({filename: {$in: filenames}}).toArray();
                if (files.length > 0) {
                    var mime = 'image/jpeg';
                    res.set('Content-Type', mime);
                    var read_stream = mongoDBService.gfs.createReadStream({filename: filename});
                    return read_stream.pipe(res);
                }
            }
            return null;
        }
        catch (e) {
            console.log(e);
            return e;
        }
    }

}

module.exports = new productsDataProcessor();