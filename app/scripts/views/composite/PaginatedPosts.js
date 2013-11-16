define([
	'backbone',
	'hbs!tmpl/composite/PaginatedPosts_tmpl',
    'views/item/PostItemView'
],
function( Backbone, PaginatedpostsTmpl, PostItemView  ) {
    'use strict';

	/* Return a CompositeView class definition */
	return Backbone.Marionette.CompositeView.extend({
    	itemView : PostItemView,
    	template : PaginatedpostsTmpl,
        tagName : 'ul',
        className : 'posts-titles',
    });
});