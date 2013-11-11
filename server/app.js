'use strict';

var express = require('express');
var http = require('http');
var path = require('path');
var async = require('async');
var hbs = require('express-hbs');
var baucis = require('baucis');
var socketIO = require('socket.io');
var mongoose = require('mongoose');

//socketio


// start mongoose
mongoose.connect('mongodb://localhost/post_database');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {

	//Tests is a string is empty
	function isEmptyString (string) {
		return string.length;
	}

	function lower (string) {
		return string.toLowerCase();
	}

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
        title: { type: String, 
        	validate: [isEmptyString, 'post title is required']
        },
        tags: [Tag],
        content: { type: String, trim: true,
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
    var Tag = mongoose.model( 'tag', TagSchema );
    var Post = mongoose.model( 'post', 	PostSchema );
    
    //dummy data
    var samplePosts = ['test1', 'test2', 'test3', 'mongo', 'express', 'kate jennings', 'fast food', 'adventures in cyberspace', 'old man',
        'kate sexton', 'kate beckinsale', 'kate katie', 'katy dad', 'i am ur katie' ];
    var posts = samplePosts.map(function (post) { 
    		return new Post({ 
    			title: post,
    			content: '<h3>test</h3>',
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

		    /* set Baucis */
		    var controller = baucis.rest({
		    	singular: 'post'
  		    });
	});
    

	var app = express();

	app.configure(function(){
	    app.set('port', 9000);

	    app.set('view engine', 'handlebars');
	    app.set('views', __dirname + '../app/scripts/views');
	});

	app.use(express.urlencoded());
    app.use('/api/v1', baucis());

	// simple log
	app.use(function(req, res, next){
	  console.log('%s %s', req.method, req.url);
	  next();
	});

	// mount static
	app.use(express.static( path.join( __dirname, '../app') ));
	app.use(express.static( path.join( __dirname, '../.tmp') ));

	// route index.html
	app.get('/', function(req, res){
	  res.sendfile( path.join( __dirname, '../app/index.html' ) );
	});

	// start server
	http.createServer(app).listen(app.get('port'), function(){
	    console.log('Express App started!');
	});
});


