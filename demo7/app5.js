var zlib = require('zlib');
var http = require('http');
var fs = require('fs');

var req = http.get({
	host: 'localhost',
	path: '/',
	port: 1337,
	headers: {'accept-encoding': 'gzip,deflate'}
});

req.on('response', function(res) {
	var out = fs.createWriteStream('./test.txt');
	switch(res.headers['accept-encoding']) {
		case 'gzip':
		res.pipe(zlib.createGunzip()).pipe(out);
		break;
		case 'deflate':
		res.pipe(zlib.createInflate()).pipe(out);
		break;
		default:
		res.pipe(out);
	}
})