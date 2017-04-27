var mongoDBService = require('../services/mongodbService/mongodbService')

class StoreManager{
    constructor() {
        this.dbService = mongoDBService;
    }

    start(){
        var storeManager = this;
        var url = 'mongodb://localhost:27017/test'
        storeManager.dbService.connect(url,function(err) {
            if (err) {
                console.log('Unable to connect to Mongodb.')
                process.exit(1)
            }
            console.log('connected to Mongodb.')
        })
        storeManager.dbService.connectGridFS(url)
    }
}

module.exports = new StoreManager()