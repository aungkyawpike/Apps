var productsManager = require('./productsManager');

class productsService{

    async getProducts(_ids){
        return await productsManager.getProducts(_ids);
    }

    async postProducts(product){
        return await productsManager.postProducts(product);
    }

    async putProducts(products){
        return await productsManager.putProducts(products);
    }

    async deleteProducts(_ids){
        return await productsManager.deleteProducts(_ids);
    }

    async getUploadFileStream(filenames,res) {
        return await productsManager.getUploadFileStream(filenames, res);
    }
}

module.exports = new productsService();