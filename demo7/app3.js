var zlib = require('zlib');
var gzip = zlib.createGzip();
var fs = require('fs');

var inp = fs.createReadStream('./app.js');
var out = fs.createWriteStream('./app.js.gz');

inp.pipe(gzip).pipe(out);