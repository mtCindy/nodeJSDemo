var dgram = require('dgram');

var client = dgram.createSocket('udp4');
client.bind(41235, 'localhost');

var message = new Buffer('你好');
client.send(message, 0, message.length, 41234, 'localhost');

client.on('message', function(msg, rinfo) {
   console.log('客户端接收到的数据', msg);
});

