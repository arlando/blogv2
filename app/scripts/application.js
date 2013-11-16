define([
    'backbone',
    'communicator',
    'modules/pagesocket',
    'modules/spotify',
    'modules/posts',
    'modules/page'
],

function( Backbone, Communicator, SocketIO, SpotifyModule, PostsModule, PageModule ) {
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
            App.vent.trigger('show-about');
        },
        artwork: function() {
            console.log('todo-art work');
        },
        blog: function() {
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
