define([
	'backbone',
	'hbs!tmpl/item/SpotifyPlayer_tmpl',
	'models/Track'
],
function( Backbone, SpotifyplayerTmpl, Track  ) {
    'use strict';

	/* Return a ItemView class definition */
	return Backbone.Marionette.ItemView.extend({

		initialize: function() {
			console.log("initialize a Spotifyplayer ItemView");
			debugger;
		},
        template: SpotifyplayerTmpl,

    	/* ui selector cache */
    	ui: {},

    	//sets a spotify uri and re-renders a view
    	setURI: function () {
    		this.render();
    		return this; ///2 chains
    	},

		/* Ui events hash */
		events: {},

		/* on render callback */
		onRender: function() {}
	});

});
