define([
	'backbone',
	'views/item/Track'
],
function( Backbone, TrackView ) {
    'use strict';

	/* Return a ItemView class definition */
	return Backbone.Marionette.CollectionView.extend({

		initialize: function() {
			console.log("initialize a Tracks CollectionView");
		},
		itemView: TrackView,
    	tagName: 'ul',
    	className: 'spotify-tracks-list',

    	/* ui selector cache */
    	ui: {},

    	onShow: function () {
    		this.length;
    		console.log('ok');
    	},

		/* Ui events hash */
		events: {},

		/* on render callback */
		onRender: function() {}
	});

});
