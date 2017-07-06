var http = require('http');
var domain = require('domain');

http.createServer(function(req, res) {
	var reqd = domain.create();
	reqd.add(req);
	reqd.add(res);

	reqd.on('error', function(err) {
		res.writeHead(200);
		res.write('服务器接收到客户端请求时发生以下错误');
		res.end(err.message);
	});
	res.writeHead(200);
	req.on('data', function(data) {
		if(req.url !== '/favicon.ico') {
		  test()
		  res.end('你好啊'); 
		}
	});
}).listen(1337);