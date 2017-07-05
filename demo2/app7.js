var net = require('net');

var server = net.createServer();

server.on('connection', function(socket) {
  socket.setEncoding('utf-8');
  socket.on('data', function(data) {
     console.log(data)
  });
});

server.listen('8413', 'localhost');
