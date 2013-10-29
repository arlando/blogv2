define([
	'backbone'
],
function( Backbone ) {
    'use strict';

	/* Return a model class definition */
	return Backbone.Model.extend({
		initialize: function() {
			console.log("initialize a Track model");
		},
		defaults: {
			title: "Default Title",
			spotifyuri: "4bz7uB4edifWKJXSDxwHcs",
			artist: "Default Artist"
		}
    });
});
