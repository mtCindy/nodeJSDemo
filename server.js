var http = require('http');
var fs = require('fs');
var path = require('path');
var cache = {};
var chatserver = require('./lib/chat_server');

function send404(res) {
	res.writeHead(404, {'Context-Type': 'text/plain'});
	res.write('Error 404: not found');
	res.end();
}

function sendFile(res, fileContents) {
	res.writeHead(200, {'Content-Type': 'text/html;charset=UTF-8'});
	res.end(fileContents);
}

function serverStatic(response, cache, absPath) {
	if(cache[absPath]) {
		sendFile(response, cache[absPath]);
		console.log('test cache');
	} else {
		fs.exists(absPath, function(exists) {
			if(exists) {
				fs.readFile(absPath, function(err, data) {
					if(err) {
						send404(response);
					} else {
						cache[absPath] = data;
						sendFile(response, data);
					}
				});
			} else {
				send404(response);
			}
		})
	}
}

var server = http.createServer(function(req, res) {
	if(req.url !== '/favicon.ico') {
		var filePath = '';
		if(req.url == '/') {
			filePath = 'public/index.html'
		} else {
			filePath = 'public' + req.url
		}
		var absPath = './' + filePath;
		console.log(absPath);
		serverStatic(res, cache, absPath);
	}
});

server.listen(1337);
chatserver.listen(server);