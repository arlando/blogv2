'use strict';

var express = require('express');
var http = require('http');
var path = require('path');
var async = require('async');
var hbs = require('express-hbs');
var baucis = require('baucis');
var socketIO = require('socket.io');
var mongoose = require('mongoose');
var markdown = require( "markdown" ).markdown;
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
        console.log(arguments);
        return string.toLowerCase();
    };

    //Tag a brief tag for a post
    var TagSchema = new mongoose.Schema({
        name: { type: String,
            set: lower,
            trim: true
        }
    });


    //Post input a post can have multiple tags
    var PostSchema = new mongoose.Schema({
        title: {
            type: String
        },
        callout: {
            type: String
        },
        tags: [Tag],
        markdown: {
            type: String
        },
        html: String,
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
        //convert the markdown to html and save it on the model
        console.log('markdown', this.get('markdown'));
        this.set('html', markdown.toHTML(this.get('markdown')));
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
                    markdown: '![Fred Sandback 1986](images/posts/sandback-untitled-sculptural-study-seven-part-right-angled-triangular-construction-1982-2010.2.jpg)\n\nI wanted to recreate my blog and website using modern web technologies. I considered using a prebuilt Node blogging module or WordPress but I wanted to do my own thing and I need the experience from a SysOps, DevOps, Database Management perspective. I wanted to see how the entire application pieced together and experience some of the pitfalls developing web applications with these programs. Some friends say that rolling out my own blog with modern web technologies is overkill and that I should just use WordPress. But like I said I made this for the experience.\n\nThere is this moment in personal projects where you get to what you think is the apex and you don\'t know if the project is going to fail or not. Everything is completed locally and working well but then you need to get it to the production environment. You push everything to production and nothing works like you thought it would, you then wonder if you have just wasted 3 or 4 months working on this project. You also then realize that you need to make sure that updates to production will be easy, that the site will be secure. You realize that the project you thought was near complete actually needs one, two, or even more months of more work! I like these moments. I feel like it gives me perspectival experience. It lets me know how \'hard\' these things can be. I realize that half the battle is coding the other half is making sure the system is ready for your application.\n\nSure I am building a simple blog it shouldnt be that hard right?\n\n### Local Development\n\nI used [Yeoman](http://yeoman.io/) and [Grunt](http://gruntjs.com/) to develop locally. I think Yeoman is great for automation and dealing with boiler plate code. The quicker you can get to actually developing, thinking about code architecture, and the less time you spend writing boiler plate is better. Atleast it keeps me excited and focused on project. Its also fun to quickly generate 1,000+ lines of code.\n\n*   Code Management\n*   GitHub*   IDE*   PHPStorm 7\n\n*   Server\n*   Node\n*   Express\n*   Mongoose\n*   SocketIO\n*   Baucis\n\n*   Database\n*   Mongo\n\n*   Tools\n*   Compass\n*   Bower\n*   Yeoman\n*   Grunt\n\n*   Client\n*   Backbone\n*   Marionette\n*   Require\n\n*   Template Engine\n*   Handlebarsbr\n\nI decided to use [mrichard\'s yeoman generator-marionette](https://github.com/mrichard/generator-marionette/). It has some great features and chaining (more on that later) which allowed me to focus more on architecture of the web app. The generator is not perfect but its a great tool to get the ball rolling. \n\n### Generator Pitfalls \n\n**Development pitfalls** - pitfalls I encountered while I was developing the application.\n\n**Production pitfalls** - pitfalls I encountered when trying to get the application to production.\n\n#### Development Pitfalls\n\nPackage.json has some some outdated packages. I didn\'t realize that until I was into the development hole. For example, I tried updating Baucis to the latest version and everything broke. Baucis generates REST APIs using Mongoose schemata. There are a few others REST API builders out there. I for one am a little iffy about these because APIs need to be very very secure. So making a good API becomes a rabbit hole because then you need to figure out cookies, session management, and how you are going to authenticate certain requests. Because this is the initial seeds of my new blog I didn\'t want to scope creep. I know down the line this will have an administrate interface so those issues will come up. For now getting the blog up and running is the main goal. I am sure if I had more experience I would be able to pinpoint and debug why Baucis broke. Finally when I arrived to production I had even more issues with Baucis. So in the end I decided I didn\'t want to use it.\n\nI like using the latest versions of modules because they usually fix security issues and contain performance improvements. It is a pain looking on GitHub and trying to find the correct version documentation when releases are not properly tagged and you are using an outdated version. For instance with Baucis I had to bookmark and a particular commit snapshot because it had the correct documentation relative to the version in package.json. NPM and Bower are great but it still seems like a critical component is missing. I wish the the systems would cause more of a fuss when versions are outdated.\n\nThe generator\'s directory structure is imposed. I wished I could somehow tell the generator-application put collectionviews here or if I could set a flag of where to put specific things. The generator has ideas of chaining ie. make a `yo marionette:compositeview cview --itemview iview --create-all`. This will make your the composite view, the itemview, and the templates for both and link them together in Marionette fashion. It also will create stubs for testing spec!\n\nSo I can see how this could be difficult to orchestrate. However, it works for small apps but if you were working on a huge app it could quickly become a pain trying to move files to their correct folders to create an appropriate modularized architecture. I also wish that the node\'s app.js in mrichard\'s generator encouraged more modularity and didn\'t throw developers into a spaghetti code situation. \n\nThere is a mix of tabs and spaces in the generator\'s code base despite there being a .jshintrc file in the project root. Maybe the text editing client wasn\'t set up correctly. However this has inspired me to make a GitHub issue and as several others have expressed same feeling I may endup creating a pull request with the fixed white space\n.\n\nUsing SocketIO within the confines of the generator isn\'t exactly clear. I remember having to do a lot of searching to figure out how to link the thing to the server and then how to link from the server to the client. It wasn\'t terribly hard but I thought the generator would take care of boilerplate like that for me on initialization. But I think this is more of an experience problem and less of a generator problem.\n\n#### Production Pitfalls\n\nStatic assets are served via node. It may be cool to have a nginx configuration generator, that would help server static assets for local and production. Currently static assets are served via the express module which is ok but not ideal for scalability reasons.\n\nThere is also weird issue I have to investigate with `dist` creation. The `dist` folder is where all static assets are served from. Grunt runs the JavaScripts, SCSS, and all other static assets through a minifier. The .tmp folder sometimes causes the `dist` folder not to compile recent code changes.\n\nThe generator should encourage the use of the forever module. This module could encourage developers to think about what happens to their node instance when their code changes. Should the instance stop and restart? I wish the generator had more of this thinking, but these kind of problems you face once you get into production and you try to set up a deployment cycle. More about this later.\n\nThere is no mix up and server side templating and client side templating. I wonder if there is a generator for that. I would love to see a baseline mix. This generator servers a static JavaScript file.\n\n### Application Architecture\n\nI decided to mold the JavaScript side of the application into discrete modules. If I wanted to use something again I could just rip it out of this project and put it in a new project and things should work with a little tinkering. The require style is great for this as it allows you to quickly see a files dependencies. There was a bit of a divergence between how my Node app server was architectured and my JavaScript was architectured. In the future I hope to organize them in the same fashion.\n',
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
        app.use(express.bodyParser());
        app.set('view engine', 'handlebars');
        app.set('views', __dirname + '../app/scripts/views');
    });
    //TODO THIS SHOULD BE MUCH MORE MODULAR
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
                res.send('FUU');
            } else {
                res.json(models);
            }
        });
    };
    app.get('/api/v1/posts', function(req, res, next) {
        getPosts(req, res);
    });
    app.post('/api/v1/insert', function(req, res) {
        new Post({
            title: req.body.title,
            callout: req.body.callout,
            markdown: req.body.markdown,
            //TODO implement tagging function
            tags: []
        }).save(function(err, Post) {
                if (err) {
                    //failures
                    res.send(500);
                } else {
                    //saved it wahoo sent http 201
                    res.status(201);
                    //backbone needs this to throw the success cb
                    res.json(Post);
                }
            });
    });


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
        maxMessageLength = 1024;
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