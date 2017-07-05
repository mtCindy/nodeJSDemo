var dgram = require('dgram');

var server = dgram.createSocket('udp4');

server.on('message', function(msg, rinfo) {
   var buf = new Buffer('已接收客户端发送的数据'+msg);
   server.setBroadcast(true);
   server.send(buf, 0, buf.length, 41235, 'localhost');
});

server.bind(41234, 'localhost');
