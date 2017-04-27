var productsManager = require('./productsManager');

class productsService{

    async getProducts(){
        return await productsManager.getProducts();
    }

    async postProducts(products){
        return await productsManager.postProducts(products);
    }

    async deleteProducts(ids){
        return [];
    }

    async getProduct(id){
        return await productsManager.getProduct(id);
    }

    async postProduct(product){
        return await productsManager.postProduct(product);
    }

    async putProduct(product){
        return await productsManager.putProduct(product);
    }

    async deleteProduct(id){
        return [];
    }
}

module.exports = new productsService();