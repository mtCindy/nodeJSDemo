var http = require('http');
var express = require('express');
var sio = require('socket.io');

var app = express();
var server = http.createServer(app);
app.get('/', function(req, res) {
	res.sendFile(__dirname+'/chat.html');
})

server.listen(1337);
var io = sio.listen(server);

var names = [];
io.sockets.on('connection', function(socket) {
	socket.on('login', function(name) {
		if(names.length > 0) {
			names.forEach(item => {
				if(name == item) {
					socket.emit('duplicate');
					return;
				}
			});
		}
		names.push(name);
		socket.emit('login', {names, name});
		socket.broadcast.emit('login', {names, name});
	});
	socket.on('send message', function(data) {
		socket.emit('send message', data);
		socket.broadcast.emit('send message', data);
	});
	socket.on('logout', function(username) {
		if(names.length > 0) {
			names.forEach((item, index) => {
				if(username == item) names.splice(index, 1)
			});
			socket.emit('send userlist', names);
			socket.broadcast.emit('send userlist', names);
			socket.emit('logout', username);
		    socket.broadcast.emit('logout', username);
		}
	});
});