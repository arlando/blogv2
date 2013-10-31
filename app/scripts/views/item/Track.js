define([
	'backbone',
	'hbs!tmpl/item/Track_tmpl',
	'collections/Tracks'
],
function( Backbone, TrackTmpl, Tracks ) {
    'use strict';

	/* Return a ItemView class definition */
	return Backbone.Marionette.ItemView.extend({

		initialize: function() {
			console.log("initialize a Track ItemView");
			this.model.on('change:playing', this.render);
		},
		
    	template: TrackTmpl,
    	collection: Tracks,
        tagName: 'li',
        className: 'spotify-track', 

    	/* ui selector cache */
    	ui: {},

		/* Ui events hash */
		events: {},

		/* on render callback */
		onBeforeRender: function() {
			this.$el.attr('data-track-id', this.model.cid) //should only set this once
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