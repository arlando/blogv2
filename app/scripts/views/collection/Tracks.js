define([
    'backbone',
    'views/item/Track'
],
function( Backbone, TrackView ) {
    'use strict';
    return Backbone.Marionette.CollectionView.extend({
        itemView: TrackView,
        tagName: 'ul',
        className: 'spotify-tracks-list',
        /* Ui events hash */
        events: {
            'click li': 'changeCurrentTrack'
        },
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
            var track = this.collection.get(e.currentTarget.getAttribute('data-track-id'));
            e.preventDefault();
            e.stopPropagation();
            //if the current track was not clicked again
            if (!track.isPlaying()) {
                //find the current playing track in the collection ... remove the state
                this.findPlayingTrack();

                //add the new state
                track.togglePlaying();

                //tell the layout to update the view
                this.trigger('event:change-spotify-track');
            }
        }
    });
});
