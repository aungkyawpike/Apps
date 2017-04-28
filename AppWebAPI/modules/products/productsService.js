var productsManager = require('./productsManager');

class productsService{

    async getProducts(){
        return await productsManager.getProducts();
    }

    async postProducts(products){
        return await productsManager.postProducts(products);
    }

    async putProducts(products){
        return await productsManager.putProducts(products);
    }

    async deleteProducts(_ids){
        return await productsManager.deleteProducts(_ids);
    }

    async getProduct(_id){
        return await productsManager.getProduct(_id);
    }

    async postProduct(product){
        return await productsManager.postProduct(product);
    }

    async putProduct(_id, product){
        return await productsManager.putProduct(_id, product);
    }

    async deleteProduct(_id) {
        return await productsDataProcessor.deleteProduct(_id);
    }
}

module.exports = new productsService();