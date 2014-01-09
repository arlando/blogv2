define([
    'backbone',
    'models/PostModel',
    'views/item/EditPostItemView',
    'views/layout/EditPostLayout',
    'application'
],
function( Backbone, Post, EditPostView, EditPostLayout, App ) {
    'use strict';
    return App.module('editPost', function() {
        var post = new Post(),
            editPostView,
            editPostLayout = new EditPostLayout();

        editPostLayout.on('show', function() {
            editPostLayout.editPost.show(editPostView);
        });

        App.vent.on('show-edit-post', function(id) {
            if (!App.session) {
                App.session = {};
                App.session.next = 'edit/' + id;
                Backbone.history.navigate('#login', {trigger: true});
            } else {
                var oldurl = post.url;
                post.url = post.url + id;
                var promise = post.fetch();
                promise.done(function() {
                    editPostView =  new EditPostView({model: post});
                    App.page.show(editPostLayout);
                });
                post.url = oldurl;
            }
        });


    });

});