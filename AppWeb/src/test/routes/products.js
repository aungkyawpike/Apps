let webdriver = require('selenium-webdriver');
let chrome = require('selenium-webdriver/chrome');
let path = require('chromedriver').path;
let chai = require('chai');
let should = chai.should();

//let service = new chrome.ServiceBuilder(path).build();
//chrome.setDefaultService(service);
//let driver = new sw.Builder()
//	.withCapabilities(sw.Capabilities.chrome())
//	.build()
const driver = new webdriver.Builder()
	.forBrowser('chrome')
	.build()
const By = webdriver.By;

describe('products', function() {
  this.timeout(100000);
	before(async function(done) {
		driver.navigate().to('http://localhost:8888').then(() => done());
	});

	describe('route to /products', () => {
		it('it should show all the products', (done) => {
				driver.findElement(By.css('#container2'))
					.then((container) => chai.expect(container).not.to.be.null)
					.then(() => done());
		});
	});

	after((done) => {
		driver.quit().then(() => done());
	});
})
