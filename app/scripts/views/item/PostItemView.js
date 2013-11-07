define([
	'backbone',
	'hbs!tmpl/item/PostItemView_tmpl'
],
function( Backbone, PostitemviewTmpl  ) {
    'use strict';

	/* Return a ItemView class definition */
	return Backbone.Marionette.ItemView.extend({
    	template: PostitemviewTmpl,
        tagName: 'div',
        className: 'post'
	});
});