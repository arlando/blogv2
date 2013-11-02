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

    	//sets a spotify uri and re-renders a view
    	setURI: function(model) {
    		this.model = model;
    		this.render();
    	},

		/* Ui events hash */
		events: {},

		loaded: function() {
			console.log('spotify player loaded something');
		},

		/* on render callback */
		onRender: function() {
			var self = this;
			//bind this function so we know when it rendere
			//console.log(this.$el.find('#spotify-player-iframe'));
			this.$el.find('#spotify-player-iframe').load( function() {
				self.loaded();
			});
		}
	});
});
