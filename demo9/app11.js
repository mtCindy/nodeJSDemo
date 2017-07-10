var http = require('http');
var sio = require('socket.io');
var express = require('express');
var app = express();
var server = http.createServer(app);
app.get('/', function(req, res) {
	res.sendFile(__dirname+'/index4.html');
});

server.listen(1337);
var socket = sio.listen(server);

socket.on('connection', function(socket) {
	socket.on('set nickname', function(name) {
		socket.set('nickname', name, function() {
			socket.emit('send nickname', name);
		});
	});
	socket.on('get nickname', function() {
		socket.get('nickname', function(err, data) {
			if(err) socket.emit('err', err.message);
			else {
				socket.emit('send nickname', data);
			}
		});
	});
});