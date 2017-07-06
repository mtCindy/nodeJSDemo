var http = require('http');

var options = {
	hostname: 'localhost',
	port: 1337,
	path: '/',
	method: 'POST'
};

var req = http.request(options, function(res) {
	res.setEncoding('utf8');
	res.on('data', function(data) {
		console.log('响应内容'+data);
	});
});

req.write('你好');
req.end('再见');