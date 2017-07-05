var net = require('net');
var fs = require('fs');

var file = fs.createWriteStream('./message.txt');

var server = net.createServer();

server.on('connection', function(socket) {
   socket.setTimeout(10*1000);
   socket.pause();
   
   socket.on('timeout', function() {
      socket.resume();
      socket.pipe(file);
   });
});


server.listen(8413, 'localhost');
