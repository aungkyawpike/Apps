var productsDataProcessor = require('./productsDataProcessor');

class productsProcessor{
    async getProducts(){
        return await productsDataProcessor.getProducts();
    }

    async postProducts(products){
        return await productsDataProcessor.postProducts(products);
    }

    async putProducts(products){
        return await productsDataProcessor.putProducts(products);
    }

    async deleteProducts(_ids){
        return await productsDataProcessor.deleteProducts(_ids);
    }

    async getProduct(_id) {
        return await productsDataProcessor.getProduct(_id);
    }

    async postProduct(product) {
        return await productsDataProcessor.postProduct(product);
    }

    async putProduct(_id, product) {
        return await productsDataProcessor.putProduct(_id, product);
    }

    async deleteProduct(_id) {
        return await productsDataProcessor.deleteProduct(_id);
    }

    async getUploadFileStream(filename, res) {
        return await productsDataProcessor.getUploadFileStream(filename, res);
    }
}

module.exports = new productsProcessor();
