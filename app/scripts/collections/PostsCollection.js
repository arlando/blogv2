define([
	'backbone',
    'baucis',
    'models/PostModel'
],
function( Backbone, Baucis, Post ) {
    'use strict';

	/* Return a collection class definition */
	return Backbone.Collection.extend({
        url: '/api/v1/posts',
        baucis: Baucis,
        model: Post,
        
		initialize: function() {
			console.log("initialize a Postscollection collection");
		}
	});
});
