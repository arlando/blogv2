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
                "": "home",
                "about": "about",
                "artwork": "artwork",
                "blog": "blog"
            }
        });

    var Controller = {
        home: function() {
            App.vent.trigger('show-home');
        },
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
