define([
	'backbone',
	'hbs!tmpl/item/PostItemView_tmpl'
],
function( Backbone, PostitemviewTmpl  ) {
    'use strict';

	/* Return a ItemView class definition */
	return Backbone.Marionette.ItemView.extend({

		initialize: function() {
			console.log("initialize a Postitemview ItemView");
		},
		
    	template: PostitemviewTmpl,
        tagName: 'div',
        className: 'post',
        

    	/* ui selector cache */
    	ui: {},

		/* Ui events hash */
		events: {},

		/* on render callback */
		onRender: function() {}
	});

});