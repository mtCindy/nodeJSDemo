var fs = require('fs');

var file = fs.createReadStream('./message.txt');
var out = fs.createWriteStream('./anthorMessage.txt');

file.on('data', function(data) {
    out.write(data);
});

out.on('open', function(fd) {
  console.log('需要被写入的文件已打开', fd);
});

file.on('end', function() {
   out.end('再见', function() {
       console.log('文件已全部写完');
   });
   console.log(out.bytesWritten);
});
