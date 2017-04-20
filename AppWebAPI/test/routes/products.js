process.env.NODE_ENV = 'test';
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../../app');
let should = chai.should();

chai.use(chaiHttp);
describe('Products', () => {

    describe('/GET api/products', () => {
        it('it should GET all the products', (done) => {
            chai.request(server)
                .get('/api/products')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    done();
                });
        });
    });

    describe('/POST product', () => {
        it('it should POST products', (done) => {
            let products = {
                "products":[
                    {
                        "productId" : 1,
                        "productName": "bicycle"
                    },
                    {
                        "productId" : 2,
                        "productName": "car"
                    }
                ]
            }
            chai.request(server)
                .post('/api/products')
                .send(products)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('insertedCount');
                    res.body.insertedCount.should.be.eql(2);
                    done();
                });
        });

    });

});
