var express = require('express');
var app = express();
var querystring = require('querystring');
var mysql = require('mysql');
var pool = mysql.createPool({
	host: 'localhost',
	port: 3306,
	database: 'mysql',
	user: 'root',
	password: ''
});
app.get('/index.html', function(req, res) {
	res.send('<form method="POST" action="index.html">姓名:<input name="username" />年龄:<input name="age"/><button type="submit">提交</button></form>');
});

app.post('/index.html', function(req, res) {
	req.on('data', function(data) {
		var obj = querystring.parse(data.toString());
		pool.getConnection(function(err, connection) {
			if(err) res.send('服务器连接错误');
			else {
				connection.query('insert into users set ?', {
					username: obj.username,
					age: obj.age
				}, function(err, result) {
					if(err) res.send(创建数据失败);
					else res.send('创建数据成功');
					connection.release(); 
				});
			}
		})

	});
});
app.listen(1337, 'localhost');
