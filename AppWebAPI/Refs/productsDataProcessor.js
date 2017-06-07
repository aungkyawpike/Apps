var mongoDBService = require('../../services/mongodbService/mongodbService');

class productsDataProcessor{

    async getProducts(){
        try {
            return await mongoDBService.db.collection('products')
                .find()
                .toArray();
        }
        catch(e){
            console.log(e);
            return e;
        }
    }

    async postProducts(products){
        try {
            return await mongoDBService.db.collection('products').insertMany(products);
        }
        catch(e){
            console.log(e);
            return e;
        }
    }

    async putProducts(products){
        try {
            var responses = []
            for( var product of products) {
                var response = await mongoDBService.db.collection('products')
                    .replaceOne({_id: product._id}, product, {upsert: true});
                responses.push(response)
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
            return await mongoDBService.db.collection('products').remove({_id : {'$in':_ids}});
        }
        catch(e){
            console.log(e);
            return e;
        }
    }

    async getProduct(_id) {
        try {
            return await mongoDBService.db.collection('products')
                .find({_id : _id})
                .toArray();
        }
        catch(e){
            console.log(e);
            return e;
        }
    }

    async postProduct(product) {
        try {
            return await mongoDBService.db.collection('products').insertOne(product);
        }
        catch(e){
            console.log(e);
            return e;
        }
    }

    async putProduct(_id, product) {
        try {
            return await mongoDBService.db.collection('products').replaceOne({_id : _id}, product, { upsert: true });
        }
        catch(e){
            console.log(e);
            return e;
        }
    }

    async deleteProduct(_id) {
        try {
            return await mongoDBService.db.collection('products').deleteOne({_id : _id});
        }
        catch(e){
            console.log(e);
            return e;
        }
    }

    async getUploadFileStream(filename, res) {
        try {
            var files = await mongoDBService.gfs.files.find({filename: filename}).toArray();
            if (files.length > 0) {
                var mime = 'image/jpeg';
                res.set('Content-Type', mime);
                var read_stream = mongoDBService.gfs.createReadStream({filename: filename});
                return read_stream.pipe(res);
            }
        }
        catch (e) {
            console.log(e);
            return e;
        }
    }

}

module.exports = new productsDataProcessor();