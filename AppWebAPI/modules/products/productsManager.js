var productsProcessor = require('./productsProcessor');

class productsManager {

    async getProducts() {
        return await productsProcessor.getProducts();
    }

    async postProducts(products) {
        return await productsProcessor.postProducts(products);
    }

    async putProducts(products){
        return await productsProcessor.putProducts(products);
    }

    async deleteProducts(_ids){
        return await productsProcessor.deleteProducts(_ids);
    }

    async getProduct(_id) {
        return await productsProcessor.getProduct(_id);
    }

    async postProduct(product) {
        return await productsProcessor.postProduct(product);
    }

    async putProduct(_id, product) {
        return await productsProcessor.putProduct(_id, product);
    }

    async deleteProduct(_id) {
        return await productsProcessor.deleteProduct(_id);
    }

    async getUploadFileStream(filename, res) {
        return await productsProcessor.getUploadFileStream(filename, res);
    }

}

module.exports = new productsManager();