'use strict';
var mongoose = require('mongoose'),
    User = mongoose.model('User'),
    token = require('token');

exports.login = function(req, res) {
    User.getAuthenticated(req.body.username, req.body.password, function(err, user, reason) {
        if (err) throw err;

        //login was good set appropriate cookies
        if (user) {
            var generatedToken = token.generate(user.id + '|' + user.username);
            res.writeHead(200, {
                'Content-Type': 'application/json'
            });
            res.write(JSON.stringify({
                'id': user.id,
                'username': user.username,
                'token': generatedToken
            }));

            //update the user token and save it to the mongod!
            user.token = generatedToken;
            user.save();

            req.session.user = user;
            req.session.authed = true;
            res.end();
            return;
        }
        //failure
        var reasons = User.failedLogin;
        switch (reason) {
            case reasons.NOT_FOUND:
            case reasons.PASSWORD_INCORRECT:
                res.send(400);
                break;

            case reasons.MAX_ATTEMPTS:
                res.send(400);
                break;
        }
    });
}

exports.logout = function(req, res) {
    req.session = null;
    res.redirect('/login');
}