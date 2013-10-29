define([
	'backbone',
	'hbs!tmpl/layout/SpotifyLayout_tmpl'
],
function( Backbone, SpotifylayoutTmpl ) {
    'use strict';

	/* Return a Layout class definition */
	return Backbone.Marionette.Layout.extend({
		initialize: function() {
			console.log("initialize a Spotifylayout Layout");
		},
		
    	template: SpotifylayoutTmpl,

    	/* Layout sub regions */
    	regions: {
    		tracks: ".spotify-tracks",
    		player: ".spotify-player"
    	},

    	/* ui selector cache */
    	ui: {},

		/* Ui events hash */
		events: {},

		/* on render callback */
		onRender: function() {}
	});

});
