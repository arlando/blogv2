define([
	'backbone',
	'hbs!tmpl/item/PostItemView_tmpl'
],
function( Backbone, PostitemviewTmpl  ) {
    'use strict';

	/* Return a ItemView class definition */
	return Backbone.Marionette.ItemView.extend({
    	template: PostitemviewTmpl,
        tagName: 'li',
        className: 'post-title',
        events: {
            'click' : 'triggerCurrentPost'
        },
        triggerCurrentPost: function(){
            //trigger the event post and postlayouts will pick it up
            this.trigger('event:post');
        }
	});
});