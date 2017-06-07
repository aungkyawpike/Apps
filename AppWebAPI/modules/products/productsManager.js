var productsProcessor = require('./productsProcessor');

class productsManager {

    async getProducts(_ids) {
        return await productsProcessor.getProducts(_ids);
    }

    async postProducts(product) {
        return await productsProcessor.postProducts(product);
    }

    async putProducts(products){
        return await productsProcessor.putProducts(products);
    }

    async deleteProducts(_ids){
        return await productsProcessor.deleteProducts(_ids);
    }

    async getUploadFileStream(filenames, res) {
        return await productsProcessor.getUploadFileStream(filenames, res);
    }

}

module.exports = new productsManager();