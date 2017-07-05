var http = require('http'),
    url = require('url');

var server = http.createServer().listen(1337, 'localhost');

server.on('request', function(req, res) {
   if(req.url !== '/favicon.icon') {
      res.write('<html><head><meta charset="utf-8" /></head>');
      var parse_url = url.parse(req.url);
      switch(parse_url.pathname) {
          case '/':
          case '/index.html':
             res.write('<body>当前正在访问首页</body></html>');
             break;
          default:
             res.write('<body>当前正在访问首页hahahahahahah' + parse_url.pathname + '</body></html>');
      }
   }
   res.end();
});
