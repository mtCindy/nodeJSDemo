var express = require('express');
var app = express();
var basicAuth = require('basic-auth');
var auth = function(req, resp, next) {
	function unauthorized(resp) {
		resp.set('WWW-Authenticate', 'Basic realm=Input User&Password');
		return resp.sendStatus(401);
	}
	var user = basicAuth(req);
	if (!user || !user.name || !user.pass) {
		return unauthorized(resp);
	}
	if (user.name === 'User' && user.pass === 'Password') {
		return next();
	} else {
		return unauthorized(resp);
	}
};
app.get('/auth', auth, function(req, resp) {
	resp.status(200).send('Authorization');
});
app.listen(1337);
console.log('connect to http://localhost:1337/auth');