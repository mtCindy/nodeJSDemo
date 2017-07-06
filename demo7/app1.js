var crypto = require('crypto');
var fs = require('fs');

var shasum = crypto.createHash('sha1');
var s = fs.ReadStream('./test2.js');

s.on('data', function(data) {
	shasum.update(data);
});

s.on('end', function() {
	var d = shasum.digest('hex');
	console.log(d)
});