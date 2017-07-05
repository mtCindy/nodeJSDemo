var fs = require('fs');

var out = fs.createWriteStream('./test1.txt');

for(var i = 0; i< 10000; i++) {
   var flag = out.write(i.toString());
   console.log(flag);
}

out.on('drain', function() {
   console.log('操作系统中缓冲区中的内容已经全部输出');
   var out = fs.createWriteStream('./test2.txt');
   for(var j = 0; j < 10; j++) {
      var flag = out.write(i.toString());
      console.log(flag);
   }

   out.on('drain', function(){
      console.log('输出完毕');
   });
});
