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
        initialize: function() {
            self = this;
            console.log('initialized da view');
            this.posts.on('show', function(view) {
                self.listenTo(view, 'itemview:event:post', self.updatePosts);
            });
        },

    	regions: {
            posts: '.layout-posts',
            currentpost: '.layout-current-post'
        },

        //should update the currentpost region with the clicked
        //LI in the view in the subview
        updatePosts: function(args) {
            debugger;
            console.log('here');
            //ebugger;
            this.currentpost.currentView.model = args.model;
            this.currentpost.currentView.render();
            //retrun args.view.$el
            //return args.collection.get(cid);
        }
    });
});