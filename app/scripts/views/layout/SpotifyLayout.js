define([
    'backbone',
    'hbs!tmpl/layout/SpotifyLayout_tmpl'
],
function( Backbone, SpotifylayoutTmpl ) {
    'use strict';

    /* Return a Layout class definition */
    return Backbone.Marionette.Layout.extend({
        template: SpotifylayoutTmpl,
        /* Layout sub regions */
        regions: {
            tracks: '.spotify-tracks',
            player: '.spotify-player'
        }
    });
});