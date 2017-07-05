var net = require('net');
var fs = require('fs');

var file = fs.createWriteStream('./message.txt');

var server = net.createServer();

server.on('connection', function(socket) {
   socket.pause();
   setTimeout(function() {
     socket.resume();
     socket.pipe(file);
   }, 3000);
});

server.listen(8413, 'localhost');
