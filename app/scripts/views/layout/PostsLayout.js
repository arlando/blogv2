define([
	'backbone',
	'hbs!tmpl/layout/PostsLayout_tmpl'
],
function( Backbone, PostslayoutTmpl  ) {
    'use strict';

	/* Return a Layout class definition */
	return Backbone.Marionette.Layout.extend({

		initialize: function() {
			console.log("initialize a Postslayout Layout");
		},
		
    	template: PostslayoutTmpl,

    	/* Layout sub regions */
    	regions: {
            posts: '.layout-posts'
        },

    	/* ui selector cache */
    	ui: {},

		/* Ui events hash */
		events: {},

		/* on render callback */
		onRender: function() {}
	});

});
