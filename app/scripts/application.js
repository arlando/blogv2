define([
	'backbone',
	'communicator',
	'modules/spotify',
	'modules/posts',
	'modules/page'
],

function( Backbone, Communicator, SpotifyModule, PostsModule, PageModule ) {
    'use strict';

	var App = new Backbone.Marionette.Application(),
		MyRouter = Backbone.Marionette.AppRouter.extend({
			appRoutes: {
	            "about": "about",
	            "artwork": "artwork",
	            "blog": "blog"
	        }
		});

	// PostsModule.on('showposts', function(options) {

	// });

	var Controller = {
		//shows the about page

		about: function() {
			console.log('ok');
			App.vent.trigger('show-about');
		},
		artwork: function() {
			console.log('todo');
		},
		blog: function() {
			console.log('todo');
			App.vent.trigger('show-blog');
		}
	};
	
	/* Add initializers here */
	App.addInitializer( function() {
		new MyRouter({
			controller: Controller
		});
		Communicator.mediator.trigger("APP:START");
		if (Backbone.history) { 
   			Backbone.history.start();
  		}
	});

	return App;
});
