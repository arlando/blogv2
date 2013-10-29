define([
	'backbone',
	'hbs!tmpl/item/Track_tmpl',
	'collections/Tracks'
],
function( Backbone, TrackTmpl, Tracks ) {
    'use strict';

	/* Return a ItemView class definition */
	return Backbone.Marionette.ItemView.extend({

		initialize: function() {
			console.log("initialize a Track ItemView");
		},
		
    	template: TrackTmpl,
    	collection: Tracks,
        tagName: 'li',
        className: 'spotify-track', 

    	/* ui selector cache */
    	ui: {},

		/* Ui events hash */
		events: {},

		/* on render callback */
		onRender: function() {}
	});

});
