var  express = require('express');
var fs = require('fs');
var app = express();
var bodyParser = require('body-parser')

app.use(bodyParser.json());

app.get('/index.html', function(req, res) {
	res.sendFile(__dirname+'/index.html');
});

app.post('/index.html', function(req, res) {
	var file = req.files.myfile;
	fs.readFile(file.path, function(err, data) {
		if(err) console.log('读取文件失败');
		else {
			fs.writeFile(file.name, data, function(err) {
				if(err) console.log('写文件操作失败');
				else {
					res.send('文件上传成功');
				}
			});
		}
	});
});

app.listen(1337, 'localhost');