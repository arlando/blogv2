'use strict';
var posts = require('../controllers/posts'),
    tags = require('../controllers/tags'),
    user = require('../controllers/login'),
    auth = require ('./middlewares/authorization');

module.exports = function(app) {
    app.get('/api/v1/posts', posts.get);
    app.post('/api/v1/posts', auth.restrict, posts.create);
    app.post('/api/v1/login', user.login);
    app.post('/api/v1/logout', user.logout);
    app.post('/api/v1/tags', auth.restrict, tags.create);
    app.get('/api/v1/tags', tags.get);
    app.delete('/api/v1/delete/tag/:id', auth.restrict, tags.delete);
    app.put('/api/v1/tags/:id', auth.restrict, tags.put);
};
