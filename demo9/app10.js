var http = require('http');
var sio = require('socket.io');
var fs = require('fs');

var server = http.createServer(function(req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.end(fs.readFileSync('./index3.html'));
});

server.listen(1337);
var socket = sio.listen(server);

socket.on('connection', function(socket) {
	console.log('客户端连接建立');
	socket.emit('setName', '张三', function(data1, data2) {
		console.log(data1);
		console.log(data2);
	});
	socket.on('my other event', function(data) {
		console.log('服务器接受到的数据'+data.my);
	});
});