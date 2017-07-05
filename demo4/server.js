var net = require('net');

var server = net.createServer();

server.on('connection', function(socket) {
   console.log('客户端与服务端已经建立连接');
   socket.setEncoding('utf-8');
   socket.on('data', function(data) {
      console.log('已经接受data', data);
      socket.write('确认数据'+ data);
   });
   socket.on('error', function(err) {
     console.log('服务器出错了');
     socket.destroy();
   });
});


server.listen(8413, 'localhost');
