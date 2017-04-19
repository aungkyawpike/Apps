var productsDataProcessor = require('./productsDataProcessor');

class productsProcessor{
    async getProducts(){
        return await productsDataProcessor.getProducts();
    }

    async postProducts(products){
        return await productsDataProcessor.postProducts(products);
    }

    async deleteProducts(productIds){
        return [];
    }
}

module.exports = new productsProcessor();
