define([
    'backbone',
    'communicator',
    'modules/pagesocket',
    'modules/navigation',
    'modules/spotify',
    'modules/posts',
    'modules/page'
],

function( Backbone, Communicator ) {
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
        //triggers take the form of:
        //show-modulename-trigger
        home: function() {
            App.vent.trigger('show-page-home');
        },
        about: function() {
            App.vent.trigger('show-page-about');
        },
        artwork: function() {
            console.log('todo-art work');
        },
        blog: function() {
            App.vent.trigger('show-posts-blog');
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
