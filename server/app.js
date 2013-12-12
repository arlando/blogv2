'use strict';

var express = require('express');
var http = require('http');
var path = require('path');
var async = require('async');
var hbs = require('express-hbs');
var baucis = require('baucis');
var socketIO = require('socket.io');
var mongoose = require('mongoose');
var prod = false;


// start mongoose
if (process.env.DATABASE_URL) {
   prod = true;
}
mongoose.connect(process.env.DATABASE_URL || "mongodb://localhost/post_database" );
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {

    //Register Schemas
    //Tests is a string is empty
    var isEmptyString = function(string) {
        return string.length;
    };

    var lower = function(string) {
        return string.toLowerCase();
    };

    //Tag a brief tag for a post
    var TagSchema = new mongoose.Schema({
        name: { type: String,
            set: lower,
            trim: true ,
            validate: [isEmptyString, 'tag must have a name']
        }
    });

    //Post input a post can have multiple tags
    var PostSchema = new mongoose.Schema({
        title: {
            type: String,
            validate: [isEmptyString, 'post title is required']
        },
        callout: {
            type: String,
            validate: [isEmptyString, 'callout is required']
        },
        tags: [Tag],
        content: {
            type: String, trim: true,
            validate: [isEmptyString, 'post must have content']
        },
        meta: {
            created: { type: Date, default: Date.now },
            likes: { type: Number, default: 0 }
        }
    });

    //Consider finding these via the tag ids but it turn into a O(n^2) situation
    PostSchema.statics.findSimilarPosts = function (cb) {
        return this.model('Post').where('tags').in(this.tags, cb);
    };

    PostSchema.pre('save', function (next) {
        console.log('a post was saved to mongo: %s', this.get('title'));
        next();
    });

    //define models
    var Tag = mongoose.model( 'tag', TagSchema, 'tags' );
    var Post = mongoose.model( 'post',  PostSchema, 'posts' );

    if (!prod) {
        var samplePosts = ['test1', 'test2', 'test3', 'mongo', 'express', 'kate jennings', 'fast food', 'adventures in cyberspace', 'old man',
            'kate sexton', 'kate beckinsale', 'kate katie', 'katy dad', 'i am ur katie' ];
        var posts = samplePosts.map(function (post) {
                return new Post({
                    title: post,
                    callout: 'This is a callout',
                    content: '<h3>test</h3>'+Math.random(),
                    tags: [{name: 'nodejs'}, {name: 'awesome'}]
                });
            });
        //clear of old posts
        mongoose.model('post').remove(function (err) {
            if (err) throw err;
        });

        //put new posts in
        mongoose.model('post').create(posts, function (err) {
            if (err) throw err;
        });
        /* set Baucis */
        baucis.rest({
            singular: 'post'
        });
    }

    var app = express(express.logger());

    app.configure(function(){
        app.set('view engine', 'handlebars');
        app.set('views', __dirname + '../app/scripts/views');
    });

    app.use(express.urlencoded());
    if (!prod) {
        app.use('/api/v1', baucis());
    } else {
        var samplePost = new Post({
            title: 'First Post',
            callout: 'Just testing nothing to see here',
            content: 'Just a sample',
            tags: [{name:'awesome'}]
        });
        mongoose.model('post').create(samplePost, function (err) {
            if (err) throw err;
        });
        //on production mock an API
        var getDocuments = function(req, res) {
            var Model = mongoose.model(req.query.model);
            Model.find({}, function(err, models) {
                if (err) {
                    res.statusCode = 500;
                    res.send('FUU');
                } else {
                    res.json(models);
                }
            });
        };
        var getPosts = function(req, res) {
            var Post = mongoose.model('post');
            Post.find({}, function(err, models) {
                if (err) {
                    res.statusCode = 500;
                    res.send('FUU');
                } else {
                    res.json(models);
                }
            });
        };
        app.get('/api/v1/posts', function(req, res, next) {
            getPosts(req, res);
            next();
        });
    }


    //This is slow for production... lets use nginx instead for production
    //TODO MAKE THIS WORK FOR DEVELOPMENT and prod better ... less of hack
    //safe to assume if this isn't defined then we are probably playing on localhost
    if ( !prod ) {
        // mount static
        app.use(express.static( path.join( __dirname, '../app') ));
        app.use(express.static( path.join( __dirname, '../.tmp') ));
    }

    // route index.html
    app.get('/', function(req, res){
      res.sendfile( path.join( __dirname, '../app/index.html' ) );
    });

    //start server
    var port = process.env.PORT || 5000;
    var server = app.listen(port, '127.0.0.1');

    //socket.io
    var io = socketIO.listen(server);
    //default message for clients
    var currentmessage = 'leave a message...',
        maxMessageLength = 512;
    io.sockets.on('connection', function(socket) {

        //get the current message on connect
        socket.on('getmessage', function() {
            socket.emit('updatemessage', currentmessage);
        });

        //when the client sends us a message
        socket.on('sendmessage', function (message) {
            currentmessage = (message.length < maxMessageLength ) ? message : currentmessage;
            socket.broadcast.emit('updatemessage', currentmessage);
        });
    });
});