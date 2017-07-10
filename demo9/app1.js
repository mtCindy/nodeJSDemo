var express = require('express');
var http = require('http');

var app = express();

app.get('/index.html', function(req, res) {
	// res.writeHead(200, {'Content-Type': 'text/html'});
	// res.write('<head><meta charset="utf-8"></head>');
	// res.write('你好');
	res.send('你好');
});

app.listen(1337, 'localhost');