var http = require('http');

http.createServer(function(req, res) {
		if(req.url !== '/favicon.ico') {
		  test()
		  res.end('你好啊'); 
		}
}).listen(1337);

process.on('uncaughtException', function(err) {
	console.log("test"+err)
});