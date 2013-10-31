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

    	//could use the app request here
    	onShow: function() {},

		/* Ui events hash */
		events: {
			'click li': 'changeCurrentTrack'
		},

		/* on render callback */
		onRender: function() {},

		findPlayingTrack: function() {
			var currentTrack = this.getPlaying();
			currentTrack ? currentTrack.togglePlaying() : '';
		},

		getPlaying: function() {
			return this.collection.find( function(track) {
				return track.isPlaying();
			});
		},

		changeCurrentTrack: function(e) {
			var track = this.collection.get(e.currentTarget.getAttribute('data-track-id'))
			e.preventDefault();
			e.stopPropagation();
			//if the current track was not clicked again
			if (!track.isPlaying()) {
				//find the current playing track in the collection ... remove the state
				this.findPlayingTrack();

				//add the new state
				track.togglePlaying();
				
				//tell the app to exec
				Backbone.trigger('update-spotify-player');
			}
		}
	});

});
