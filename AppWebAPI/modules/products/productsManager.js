var productsProcessor = require('./productsProcessor');

class productsManager {

    async getProducts() {
        return await productsProcessor.getProducts();
    }

    async postProducts(products) {
        return await productsProcessor.postProducts(products);
    }

    async deleteProducts(ids) {
        return [];
    }

    async getProduct(id) {
        return await productsProcessor.getProduct(id);
    }

    async postProduct(product) {
        return await productsProcessor.postProduct(product);
    }

    async putProduct(product) {
        return await productsProcessor.putProduct(product);
    }

    async deleteProduct(id) {
        return [];
    }
}

module.exports = new productsManager();