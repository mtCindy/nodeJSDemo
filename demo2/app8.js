var net = require('net');
var fs = require('fs');

var file = fs.createWriteStream('./message.txt');

var server = net.createServer();

server.on('connection', function(socket) {
   socket.pipe(file, {end: false});
   socket.on('end', function() {
      file.end('再见');
   });
});

server.listen(8413, 'localhost');
