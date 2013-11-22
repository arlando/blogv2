define([
    'backbone',
    'hbs!tmpl/layout/PostsLayout_tmpl'
],
function( Backbone, PostslayoutTmpl  ) {
    'use strict';

    /* Return a Layout class definition */
    return Backbone.Marionette.Layout.extend({

        template: PostslayoutTmpl,
        tagName: 'div',
        className: 'layout-posts-current-post',
        /* Layout sub regions */
        initialize: function() {},

        regions: {
            posts: '.layout-posts',
            currentpost: '.layout-current-post'
        },

        onRender: function() {
            //have to init bindings here because each time the view is closed
            //these bindings are lost, because of memory management.
            var self = this;
            //TODO document this design pattern
            //whenever the posts is shown bind the itemview view's click post
            //event to updatePosts and call this method each time a post is clicked
            this.listenTo(this.posts, 'show', function(view) {
                self.listenTo(view, 'itemview:event:show-post', self.updatePosts);
            });
        },

        //should update the currentpost region with the clicked
        //LI in the view in the subview
        updatePosts: function(args) {
            this.currentpost.currentView.model = args.model;
            this.currentpost.currentView.render();

            //update the current selected post in the posts region
            this.posts.currentView.changeCurrentPost(args.model);
        }
    });
});