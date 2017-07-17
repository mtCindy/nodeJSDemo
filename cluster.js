var cluster = require('cluster');
var http = require('http');

var cpuNums = require('os').cpus().length;

if(cluster.isMaster) {
	console.log(`Master ${process.pid} is running`);
	for(let i = 0; i < cpuNums; i++) {
		cluster.fork();
	}
	cluster.on('exit', (worker, code, signal) => {
		console.log(`worker ${worker.process.pid} died`);
	})
} else {
	http.createServer((req, res) => {
		res.writeHead(200);
		res.write('Nihao');
	}).listen(1337);
	console.log(`worker ${process.pid} running`)
}