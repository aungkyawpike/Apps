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

    async getProduct(id) {
        return await productsDataProcessor.getProduct(id);
    }

    async postProduct(product) {
        return await productsDataProcessor.postProduct(product);
    }

    async putProduct(product) {
        return await productsDataProcessor.putProduct(product);
    }

    async deleteProduct(id) {
        return [];
    }
}

module.exports = new productsProcessor();
