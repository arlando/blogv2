define([
    'backbone',
    'application',
    'views/item/insertPostView',
    'models/PostModel',
    'views/layout/InsertPostLayout',
    'collections/TagCollection',
    'views/collection/InsertTagCollectionView',
    'views/item/insertTagHeaderItemView'
],
    function( Backbone, App, InsertPostView, PostModel, InsertPostLayout, Tags, InsertTagCollectionView,
        AddTagView ) {
        'use strict';
        return App.module('insertPost', function() {
            //this module allows me to add new posts to the site
            var tags = new Tags(),
                insertPostView,
                insertTagView,
                addTagView,
                insertPostLayout = new InsertPostLayout();

            insertPostLayout.on('show', function() {
                insertPostLayout.insertPost.show(insertPostView);
                insertPostLayout.insertTag.show(insertTagView);
                insertPostLayout.addTag.show(addTagView);
            });

            App.vent.on('show-insert-post', function() {
                if (!App.session) {
                    Backbone.history.navigate('#login', {trigger: true});
                } else if (tags.length > 0 && insertPostView) {
                    //already fetched tags and insertPost
                    App.page.show(insertPostLayout);
                } else {
                    //fetch the tags from the endpoint
                    var promise = tags.fetch();
                    promise.done(function() {
                        //show the new post insert
                        insertPostView = new InsertPostView({model: new PostModel()});
                        //show the fetched tags
                        insertTagView = new InsertTagCollectionView({collection: tags});
                        addTagView = new AddTagView({collection: tags});
                        App.page.show(insertPostLayout);
                    });
                }
            });

            App.addRegions({
                page: '#main-content'
            });
        });
    });
