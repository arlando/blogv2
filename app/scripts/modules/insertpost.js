define([
    'backbone',
    'application',
    'views/item/insertPostView',
    'models/PostModel'
],
    function( Backbone, App, InsertPostView, PostModel ) {
        'use strict';
        return App.module('insertPost', function() {
            //this module allows me to add new posts to the site
            var newPost = new PostModel({});
            App.addRegions({
                insertpost: '#main-content'
            });
            App.vent.on('show-insert-post', function() {
                var insertPostView = new InsertPostView({model: newPost});
                App.insertpost.show(insertPostView);
            });
        });
    });
