var net = require('net');

var server = net.createServer(function(socket) {
   server.close(function () {
     console.log('tcp 服务被关闭');
   });
   console.log('oooooooooops');
});

server.listen('8413', 'localhost');
