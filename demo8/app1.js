var dns = require('dns');

// dns.resolveMx('google.com', 'AAAA', function(err, data) {
//    console.log(data);
// });

dns.lookup('google.com', 4, function(err, data) {
   console.log(data);
});
