var cluster = require('cluster');
var http = require('http');

var cpuNums = require('os').cpus().length;

if(cluster.isMaster) {
	let numReqs = 0;
	setInterval(() => {
		console.log(`numReqs = ${numReqs}`);
	}, 1000);

	function messageHandle(msg) {
		if(msg.cmd && msg.cmd === "notifyRequest") {
			numReqs += 1;
		}
	}
	for(let i = 0; i < cpuNums; i++) {
		cluster.fork();
	}
	for(const id in cluster.workers) {
		cluster.workers[id].on('message', messageHandle);
	}
} else {
	http.createServer((req, res) => {
		res.writeHead(200);
		res.end('Nihao');
		process.send({cmd: 'notifyRequest'});
	}).listen(1337);
}