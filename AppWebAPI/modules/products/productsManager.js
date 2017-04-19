var productsProcessor = require('./productsProcessor');

class productsManager {

    async getProducts() {
        return await productsProcessor.getProducts();
    }

    async postProducts(products) {
        return await productsProcessor.postProducts(products);
    }

    async deleteProducts(productIds) {
        return [];
    }
}

module.exports = new productsManager();