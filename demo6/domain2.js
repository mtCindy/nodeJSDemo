var http = require('http');
var domain = require('domain');

http.createServer(function(req, res) {
	var d = domain.create();
	d.once('error', function(err) {
		res.write('服务器接收到客户端请求时发生以下错误');
		res.end(err.message);
	});

	d.run(function() {
		if(req.url !== '/favicon.ico') {
		  test()
		  res.end('你好啊'); 
		}
	});
}).listen(1337);