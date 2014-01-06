'use strict';

var mongoose = require('mongoose'),
    Post = mongoose.model('Post'),
    Tag = mongoose.model('Tag');

exports.get = function(req, res) {
    Post.find({}, function(err, models) {
        if (err) {
            console.log('posts get:', err)
            res.status(404);
        } else {
            res.json(models);
        }
    });
};

exports.create = function(req, res) {
    var post = new Post({
        title: req.body.title,
        callout: req.body.callout,
        markdown: req.body.markdown,
        //TODO implement tagging function
        tags: req.body.tags
    });

    //if the post has tags update each of the tags to be related to
    //the current post
    //TODO look up saving concurrently multiple posts
    if (post.tags) {
        post.tags.forEach( function(tag) {
            //find the tag in the mongod and add the new post!
            Tag.findOneAndUpdate({name: tag}, {$push: {posts: post._id}}, function(err, doc) {
                if (err) {
                    res.send('400');
                }
            });
        });
    }

    post.save(function(err, Post) {
        if (err) {
            //failures
            console.log(err);
            res.send(500);
        } else {
            //saved it wahoo sent http 201
            res.status(201);
            //backbone needs this to throw the success cb
            res.json(Post);
        }
    });
}