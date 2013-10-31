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
			Backbone.on('update-spotify-player', this.setURI, this);

		},
        template: SpotifyplayerTmpl,

    	/* ui selector cache */
    	ui: {},

    	//sets a spotify uri and re-renders a view
    	setURI: function(model) {
    		this.model = model;
    		this.render();
    	},

		/* Ui events hash */
		events: {},

		/* on render callback */
		onRender: function() {
			//bind this function so we know when it rendere
			this.$el.find.('#spotify-player-iframe').load(function() {
				this.loaded();
			});
		}


	});

});
