//load("/mongodb/db/scripts/file2.js")

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomIntArray(min, max, arraySize) {
    var i = 0;
    var randomArray = [];
    while (i < arraySize) {
        var random = getRandomInt(min, max);
        if (!randomArray.includes(random)) {
            randomArray.push(random);
            i++;
        }
    }
    return randomArray;
}

function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function getRandomDescription() {
    var s = "MongoDB provides high availability with replica sets.[8] A replica set consists of two or more copies of the data. Each replica set member may act in the role of primary or secondary replica at any time. All writes and reads are done on the primary replica by default";
    var words = s.split(" ");
    return shuffle(words).join(" ");
}

function getRandomTitle() {
    var s = "MongoDB provides high availability with replica sets.[8] A replica set consists of two or more copies of the data.";
    var words = s.split(" ");
    return shuffle(words)[0];
}

function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

function generateUID() {
    var firstPart = (Math.random() * 46656) | 0;
    var secondPart = (Math.random() * 46656) | 0;
    firstPart = ("000" + firstPart.toString(36)).slice(-3);
    secondPart = ("000" + secondPart.toString(36)).slice(-3);
    return firstPart + secondPart;
}

function getFormattedPrice(priceIn) {
    var price = "00000000000000" + priceIn;
    return price.substr(price.length - 14);
}

function getFormattedCategory(categoryIn) {
    var category = "0000" + categoryIn;
    return category.substr(category.length - 4);
}

function getBase64String() {
    //return "data:image/gif;base64,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"
    return "data:image/gif;base64,";
}

var users = [{
        _id: ObjectId(),
        name: "userA"
    },
    {
        _id: ObjectId(),
        name: "userB"
    },
    {
        _id: ObjectId(),
        name: "userC"
    }
];

function getRandomUser() {
    var random = getRandomInt(0, 2);
    return users[random];
}

function interleaveStrings(s1,s2) {
    s1 = s1.split('');
    s2 = s2.split('');
    var result = s1.reduce(function(arr, v, i) {
                              return arr.concat(v, s2[i]); 
                           }, []);
    return result.join('');
}

var user = getRandomUser();

function createProduct() {
    var product = {
        "_id": ObjectId(),
        "parentCategories": getRandomIntArray(1, 50, 3),
        "category": getRandomInt(1, 50),
        "condition": getRandomInt(1, 2),
        "title": getRandomTitle(),
        "description": getRandomDescription(),
        "offerType": getRandomInt(1, 2),
        "price": getRandomInt(0, 1000),
        "userId": user._id,
        "userName": user.name,
        "previewImage": getBase64String(),
        "images": [generateUID(), generateUID()],
        "platform": "product",
        "country": "Myanmar",
        "createdDate": randomDate(new Date(2015, 0, 1), new Date())
    };
    
    product.conditionCategoryYearPriceId = product.condition +  '#' + getFormattedCategory(product.category) + '#' + product.createdDate.getFullYear() + '#' + getFormattedPrice(product.price) + '#' + product._id;
    product.conditionCategoryDateId = product.condition +  '#' + getFormattedCategory(product.category) + '#' + product.createdDate.getTime() + '#' +  product._id;
    
    return product;
}

function bulkInsert() {
    var bulk = db.products.initializeUnorderedBulkOp();
    for (var i = 0; i <= 1000; i++) {
        bulk.insert(createProduct());
    }
    bulk.execute();
}

function initializeDB(count) {
    var bulkInsertNo = Math.floor(count / 1000);
    for (var i = 0; i <= bulkInsertNo; i++) {
        bulkInsert();
    }

    //db.products.createIndex({
    //    price: 1,
    //    category: 1
    //});   
    
    db.products.createIndex({
        conditionCategoryYearPriceId: 1      
    });
    
    db.products.createIndex({
        conditionCategoryDateId: -1
    });
}

print(createProduct());

//run in mongo shell to bulk insert - load("mockProduct.js") 

initializeDB(5000);