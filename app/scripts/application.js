define([
	'backbone',
	'communicator',
	'modules/spotify',
	'modules/posts',
	'controllers/appController'
],

function( Backbone, Communicator, SpotifyModule, PostsModule, Controller ) {
    'use strict';

	var App = new Backbone.Marionette.Application(),
		MyRouter = new Backbone.Marionette.AppRouter({
			controller: Controller,
			//when hitting these routes should load these functions
			routes: {
	            "about": "about",
	            "artwork": "artwork",
	            "blog": "blog"
	        }
		});
	
	/* Add initializers here */
	App.addInitializer( function () {
		Communicator.mediator.trigger("APP:START");
		if (Backbone.history) { 
   			Backbone.history.start();
  		}
	});

	return App;
});
