//TODO DELETE POST COLLECTION VIEW
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
	});
});