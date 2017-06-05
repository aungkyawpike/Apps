var mongoDBService = require('../services/mongodbService/mongodbService')

class StoreManager{
    constructor() {
        this.dbService = mongoDBService;
    }

    async start() {
        await this.dbService.start();
    }
}

module.exports = new StoreManager()