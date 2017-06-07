var productsDataProcessor = require('./productsDataProcessor');

class productsProcessor{
    async getProducts(_ids){
        return await productsDataProcessor.getProducts(_ids);
    }

    async postProducts(product){
        return await productsDataProcessor.postProducts(product);
    }

    async putProducts(products){
        return await productsDataProcessor.putProducts(products);
    }

    async deleteProducts(_ids){
        return await productsDataProcessor.deleteProducts(_ids);
    }

    async getUploadFileStream(filenames, res) {
        return await productsDataProcessor.getUploadFileStream(filenames, res);
    }
}

module.exports = new productsProcessor();
