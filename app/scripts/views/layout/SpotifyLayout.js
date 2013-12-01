define([
    'backbone',
    'hbs!tmpl/layout/SpotifyLayout_tmpl'
],
function( Backbone, SpotifylayoutTmpl ) {
    'use strict';
    return Backbone.Marionette.Layout.extend({
        template: SpotifylayoutTmpl,
        regions: {
            tracks: '.spotify-tracks',
            player: '.spotify-player'
        },
        onRender: function() {
            var self = this;
            //binds an event listen to listen when the current view is changed
            this.listenTo(this.tracks, 'show', function(view) {
                self.listenTo(view, 'event:change-spotify-track', self.updateTrack);
            });
        },
        updateTrack: function(args) {
            //tell the spotify player to come correct! ie listen for change-spotify-track event
            //for when a track is clicked
            this.player.currentView.setURI(this.tracks.currentView.getPlaying());
        }
    });
});