define([
    'backbone'
],
function( Backbone ) {
    'use strict';
    return Backbone.Model.extend({
        defaults: {
            title: "Default Title",
            spotifyuri: "4bz7uB4edifWKJXSDxwHcs",
            artist: "Default Artist",
            playing: false
        },

        isPlaying: function() {
            return this.get('playing');
        },

        togglePlaying: function() {
            this.set('playing', !this.get('playing'));
        }
    });
});
