'use strict';
var mongoose = require('mongoose'),
    Post = mongoose.model('Post'),
    Tag = mongoose.model('Tag');

exports.create = function(req, res) {
    var tag = new Tag({
        name: req.body.name
    });

    tag.save(function(err, Tag) {
        if (err) {
            res.send(500);
        } else {
            res.status(201);
            res.json(Tag);
        }
    });
};

exports.get = function(req, res) {
    Tag.find({}, function(err, models) {
        if (err) {
            res.status(400);
        } else {
            res.json(models);
        }
    });
};

exports.delete = function(req, res) {
    Tag.findByIdAndRemove(req.tag.id, function(err, doc) {
            if (err) {
                res.send(400);
            } else {
                //remove the tag from each of the post
                var tagID = doc.get('_id');

                //toido try ould way again
                doc.get('posts').forEach( function (id) {
                    Post.findByIdAndUpdate(
                        id,
                        {$pull: {'tags': tagID } },
                        function(err, doc) {
                            if (err) res.status(400);
                        }
                    );
                });
                res.send(204);
            }
        }
    );
};

exports.load = function(req, res, next, id) {
    Tag.findById(id, function(err, doc) {
        if (err) {
            return next(err);
        } else if (!doc) {
            return next(new Error('Nothing found'));
        } else {
            req.tag = doc;
            next();
        }
    });
};

exports.put = function(req, res) {
    Tag.findByIdAndUpdate(req.tag.id, {$set: {name: req.body.name}}, function(err, doc) {
        if (err) {
            console.log('put tag err ', err);
            res.send(400);
        } else {
            //return the edited doc
            res.status(200);
            res.json(doc);
        }
    });
};