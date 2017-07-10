var express = require('express');
var http = require('http');

var app = express();

app.get("/index.html/:id?/:name?", function(req, res) {
	var str = "";
	if(req.params.id) {
		str += req.params.id
	}
	if(str) str += '<b/r>';
	if(req.params.name) {
		str += req.params.name
	}
	res.send(str)
});

app.listen(1337, 'localhost');