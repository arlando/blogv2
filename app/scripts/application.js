define([
	'backbone',
	'communicator',
	'modules/spotify'
],

function( Backbone, Communicator, SpotifyModule ) {
    'use strict';

	var App = new Backbone.Marionette.Application();
	

	/* Add initializers here */
	App.addInitializer( function () {
		Communicator.mediator.trigger("APP:START");
	});

	return App;
});
