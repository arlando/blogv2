define([
	'backbone',
	'communicator',
	'modules/spotify',
	'modules/posts'
],

function( Backbone, Communicator, SpotifyModule, PostsModule ) {
    'use strict';

	var App = new Backbone.Marionette.Application();
	
	/* Add initializers here */
	App.addInitializer( function () {
		Communicator.mediator.trigger("APP:START");
	});

	return App;
});
