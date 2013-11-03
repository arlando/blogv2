define([
	'backbone',
    'baucis'
],
function( Backbone, Baucis ) {
    'use strict';

	/* Return a model class definition */
	return Backbone.Model.extend({
        url: '/api/v1/posts',
        baucis: Baucis,

		initialize: function() {
			console.log("initialize a Postmodel model");
		},

		defaults: {},

    });
});
