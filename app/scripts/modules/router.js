define([
    'backbone',
    'application'
],

function( Backbone, App ) {
    'use strict';
    console.log('da routa has be finalized');

    var Router = Backbone.Marionette.AppRouter.extend({
        appRoutes: {
            "": "home",
            "about": "about",
            "artwork": "artwork",
            "blog": "blog"
        }
    }),
    Controller = {
        //triggers take the form of:
        //modules handle the event bubbling
        //show-modulename-trigger
        home: function() {
            console.log('show home...');
            App.vent.trigger('show-page-home');
        },
        about: function() {
            console.log('show about...');
            App.vent.trigger('show-page-about');
        },
        artwork: function() {
            console.log('show artwork...');
        },
        blog: function() {
            console.log('show blog...');
            App.vent.trigger('show-posts-blog');
        }
    };
    var router = new Router({
        controller: Controller
    });

    return router;
});