
var https = require('https');
var queryString = require('querystring');

exports.httpsRequest = function (host, path, method, data, port, successCallBack) {

	var dataString = JSON.stringify(data);

	if (method == 'GET') {
		if (data != null) {
			path += '?' + queryString.stringify(data);
		}
	} else {
		headers = {
			'Content-Type' : 'application/json',
			'Content-Length' : dataString.length,
			'Accept' : 'application/json'
		};
	}

	var options = {};
	options.hostname = host;
	options.method = method;
	options.path = path;
	options.agent = false;
	if (port) {
		options.port = port;
	}

	var request = https.request(options, function (response) {
			response.setEncoding('utf-8');

			var responseString = '';

			response.on('data', function (data) {
				//console.log(data);
				responseString += data;
			});

			response.on('end', function () {
				//console.log(responseString);
				var responseObject = JSON.parse(responseString);
				successCallBack(responseObject);
			});

		});

	request.write(dataString);
	request.end();
}
