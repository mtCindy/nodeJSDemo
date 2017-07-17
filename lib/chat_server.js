var sio = require('socket.io');
var io;
var names = [];

exports.listen = function(server) {
	io = sio.listen(server);
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
}