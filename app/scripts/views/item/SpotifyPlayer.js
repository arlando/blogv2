define([
    'backbone',
    'hbs!tmpl/item/SpotifyPlayer_tmpl'
],
function( Backbone, SpotifyplayerTmpl  ) {
    'use strict';
    return Backbone.Marionette.ItemView.extend({
        initialize: function() {
            Backbone.on('update-spotify-player', this.setURI, this);
        },
        template: SpotifyplayerTmpl,
        //sets a spotify uri and re-renders the attached view
        setURI: function(model) {
            this.model = model;
            this.render();
        },
        loaded: function() {
            //TODO: finish implementing iframe loaded stuff
            //fired when the new track iframe is finished loading
        },
        /* on render callback */
        onRender: function() {
            var self = this;
            //bind this function so we know when its rendered
            this.$el.find('#spotify-player-iframe').load( function() {
                self.loaded();
            });
        }
    });
});