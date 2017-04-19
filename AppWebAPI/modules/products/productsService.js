var productsManager = require('./productsManager');

class productsService{

    async getProducts(){
        return await productsManager.getProducts();
    }

    async postProducts(products){
        return await productsManager.postProducts(products);
    }

    async deleteProducts(productIds){
        return [];
    }
}

module.exports = new productsService();