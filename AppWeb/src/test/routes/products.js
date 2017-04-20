var nightwatch = require('nightwatch');

describe('Github', function() {

	it('Demo test GitHub', function (client) {
		client
			.url('https://github.com/nightwatchjs/nightwatch')
			.waitForElementVisible('body', 1000)
	});

	after(function(client, done) {
		if (client.sessionId) {
			client.end(function() {
				done();
			});
		} else {
			done();
		}
	});

});
