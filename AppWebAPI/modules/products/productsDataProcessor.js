var mongoDBService = require('../../services/mongodbService/mongodbService');

class productsDataProcessor{

    async getProducts(){
        try {
            return await mongoDBService.db.collection('products')
                .find()
                .toArray();
        }
        catch(e){
            return {products: []};
        }
    }

    async postProducts(products){
        try {
            return await mongoDBService.db.collection('products').insertMany(products);
        }
        catch(e){
            return {products: []};
        }
    }

    async deleteProducts(productIds){
        return [];
    }
}

module.exports = new productsDataProcessor();