define([
	'backbone',
	'views/item/PostItemView'
],
function( Backbone, PostView ) {
    'use strict';

	/* Return a ItemView class definition */
	return Backbone.Marionette.CollectionView.extend({

		initialize: function() {
			console.log("initialize a Postscollectionview CollectionView");
		},
		itemView: PostView,
		tagName: 'div',
		className: 'posts',

    	/* ui selector cache */
    	ui: {},

		/* Ui events hash */
		events: {},

		/* on render callback */
		onRender: function() {}
	});

});
