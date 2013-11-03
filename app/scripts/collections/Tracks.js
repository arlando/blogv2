define([
	'backbone',
	'models/Track'
],
function( Backbone, Track ) {
    'use strict';

	/* Return a collection class definition */
	return Backbone.Collection.extend({
		initialize: function() {
			console.log("initialize a Tracks collection");
		},
		model: Track
	});
});