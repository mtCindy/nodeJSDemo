var net = require('net');

var server = net.createServer(function(socket) {
   server.getConnections(function(error, count) {
      console.log('当前存在的客户端连接数', count);
      server.maxConnections = 2;
      console.log('最大连接数', server.maxConnections);

   });
});

server.listen(8413, 'localhost', function() {
   address = server.address();
   console.log('服务器端开始监听', address);
});

server.on('error', function(e) {
   if(e.code == 'EADDRINUSE') {
      console.log('oooooooops');
   }
});

console.log('tcp 服务器被创建');
