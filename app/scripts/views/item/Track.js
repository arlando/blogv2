define([
    'backbone',
    'hbs!tmpl/item/Track_tmpl',
    'collections/Tracks'
],
function( Backbone, TrackTmpl, Tracks ) {
    'use strict';
    return Backbone.Marionette.ItemView.extend({
        initialize: function() {
            this.model.on('change:playing', this.render);
        },
        template: TrackTmpl,
        collection: Tracks,
        tagName: 'li',
        className: 'spotify-track',
        onBeforeRender: function() {
            //should only set this once ... need to investigate better pattern of setting
            //this bad boy
            this.$el.attr('data-track-id', this.model.cid);
            if (this.model.get('playing')) {
                this.addPlaying();
            } else {
                this.removePlaying();
            }
        },
        addPlaying: function() {
            this.$el.addClass('currently-playing');
        },
        removePlaying: function() {
            this.$el.removeClass('currently-playing');
        }
    });
});