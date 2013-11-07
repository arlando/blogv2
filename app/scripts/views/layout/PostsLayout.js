define([
	'backbone',
	'hbs!tmpl/layout/PostsLayout_tmpl'
],
function( Backbone, PostslayoutTmpl  ) {
    'use strict';

	/* Return a Layout class definition */
	return Backbone.Marionette.Layout.extend({
	
    	template: PostslayoutTmpl,
    	/* Layout sub regions */
    	regions: {
            posts: '.layout-posts',
        },
    });
});
