let sw = require('selenium-webdriver');
let chai = require('chai');
let should = chai.should();
let chaiWebdriver = require('chai-webdriver');
let chrome = require('selenium-webdriver/chrome');
let path = require('chromedriver').path;

let service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);
let driver = new sw.Builder()
	.withCapabilities(sw.Capabilities.chrome())
	.build()
chai.use(chaiWebdriver(driver));

describe('products', function() {
  this.timeout(100000);
	before(function(done) {
		//driver.get('http://localhost:8888').then(() => done())
		driver.get('http://github.com').then(() => done());
	});

	describe('route to /products', () => {
		it('it should show all the products', (done) => {
			//chai.expect('#site-container h1.heading').dom.to.not.contain.text("I'm a kitty!");
			chai.expect('#js-pjax-container').dom.to.not.contain.text("I'm a kitty!");
		});
	});

	after((done) => {
		driver.quit()
			.then(() => done())
	});
})
