var fs = require('fs');

var file = fs.createReadStream('./message.txt', {start: 3, end: 12});

file.on('open', function(fd) {
    console.log('该文件描述符', fd);
}); 

file.on('data', function(data) {
   console.log('读取到的数据', data);
});


file.on('close', function() {
  console.log('文件关闭');
});

file.on('error', function(error) {
   console.log('该文件的错误', error);
});
