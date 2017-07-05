var net = require('net');

var client = new net.Socket();

client.setEncoding('utf-8');

client.connect(8413, 'localhost', function() {
   console.log('已经连接到服务器');
   client.write('你好');
});

client.on('data', function(data) {
   console.log('已接受服务器发送的数据', data);
});

client.on('error', function(err) {
   console.log('客户端出错了');
   client.destroy();
});
