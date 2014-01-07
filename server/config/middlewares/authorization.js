'use strict';
var token = require('token');

//TODO make a secret middle key
function isValidJSONToken(json) {
    return token.verify(json.userid + '|' + json.username, json.token);
}

function isValidQueryToken(query) {
    return token.verify(query.userid + '|' + query.username, query.token);
}

exports.restrict = function (req, res, next) {
    //restrict only to authorized users
    if (req.session.authed && (isValidJSONToken(req.body) || isValidQueryToken(req.query))) {
        next();
    } else {
        req.session.error = 'Access denied!';
        res.send(401);
    }
};