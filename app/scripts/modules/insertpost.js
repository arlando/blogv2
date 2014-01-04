define([
    'backbone',
    'application',
    'views/item/insertPostView',
    'models/PostModel',
    'views/layout/InsertPostLayout',
    'collections/TagCollection',
    'views/collection/InsertTagCollectionView'
],
    function( Backbone, App, InsertPostView, PostModel, InsertPostLayout, Tags, InsertTagCollectionView ) {
        'use strict';
        return App.module('insertPost', function() {
            //this module allows me to add new posts to the site
            var newPost = new PostModel({}),
                tags = new Tags(),
                insertPostView,
                insertTagView,
                insertPostLayout = new InsertPostLayout();

            insertPostLayout.on('show', function() {
                insertPostLayout.insertPost.show(insertPostView);
                insertPostLayout.insertTag.show(insertTagView);
            });

            App.vent.on('show-insert-post', function() {
                //already fetched tags and insertPost
                if (tags.length > 0 && insertPostView) {
                    App.page.show(insertPostLayout);
                } else {
                    //fetch the tags from the endpoint
                    var promise = tags.fetch();
                    promise.done(function() {
                        //show the new post insert
                        insertPostView = new InsertPostView({model: newPost});
                        //show the fetched tags
                        insertTagView = new InsertTagCollectionView({collection: tags});
                        App.page.show(insertPostLayout);
                    });
                }
            });

            App.addRegions({
                page: '#main-content'
            });
        });
    });
