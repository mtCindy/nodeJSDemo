var express = require('express');
var http =require('http');
var app = express();
var mysql = require('mysql');
var pool = mysql.createPool({
	host: 'localhost',
	port: 3306,
	database: 'mysql',
	user: 'root',
	password: ''
});

app.get('/order_add.html', function(req, res) {
	res.sendFile(__dirname+'/order_add.html');
}).listen(1337, 'localhost');

app.post('/order_add.html', function(req, res) {
	req.on('data', function(data) {
		var obj = JSON.parse(data.toString());
		pool.getConnection(function(err, connection) {
			if(err) res.send('服务器连接错误');
			else {
				connection.query('insert into orders set ?', {
					order_id: obj.order_id,
					order_date: obj.order_date,
					goods_id: obj.goods_id,
					goods_description: obj.goods_description,
					number: obj.number 
				}, function(err, result) {
					if(err) res.send(创建数据失败);
					else res.send('创建数据成功');
					connection.release(); 
				});
			}
		})

	});
});

app.get('/order_list.html', function(req, res) {
	// res.sendFile(__dirname+'/order_list.html');
	pool.getConnection(function(err, connection) {
			if(err) res.send('服务器连接错误');
			else {
				const ret = [];
				connection.query('SELECT * FROM orders', function(err, result) {
					if(err) console.log(err);
					else {
						var string = JSON.stringify(result);
						var json = JSON.parse(string);
					}
					var trs = json.map((item) => (
						`<tr><td>${item.order_id}</td><td>${item.order_date}</td><td>${item.goods_id}</td><td>${item.goods_description}</td><td>${item.number}</td></tr>`
					));
					res.writeHead(200);
					res.write('<html><head><meta charset="utf-8" /></head>');
					res.write('<body><table><thead><th>订单编号</th><th>订单日期</th><th>商品编号</th>'+
						'<th>商品描述</th><th>商品数量</th></thead>'+ trs+'</table></body></html>');
					connection.release(); 
				});
			}
		})
});