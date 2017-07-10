var express = require('express');
var app = express();

app.get('/index.html', function(req, res) {
	res.sendFile(__dirname+'/index.html');
})

app.listen(1337, 'localhost');