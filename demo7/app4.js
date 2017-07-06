var zlib = require('zlib');
var fs = require('fs');
var http = require('http');

http.createServer(function(req, res) {
	var raw = fs.createReadStream('./app.js');
	var acceptEncoding = req.headers['accept-encoding']
	if(!acceptEncoding) {
		acceptEncoding = '';
	}
	if(acceptEncoding.match(/\bdeflate\b/)) {
		res.writeHead(200, {'content-encoding': 'gzip'});
		raw.pipe(zlib.createGzip()).pipe(res);
	} else if(acceptEncoding.match(/\bgzip\b/)) {
		res.writeHead(200, {'content-encoding': 'gzip'});
		raw.pipe(zlib.createGzip()).pipe(res);
	} else {
		res.writeHead(200, {});
		raw.pipe(res);
	}
	res.end('处理完毕');
}).listen(1337);