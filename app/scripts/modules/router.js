define([
    'backbone',
    'application'
],
function( Backbone, App ) {
    'use strict';
    var Router = Backbone.Marionette.AppRouter.extend({
        appRoutes: {
            '': 'home',
            'about': 'about',
            'artwork': 'artwork',
            'blog': 'blog',
            'blog/:id': 'blogTrack'
        },
        initialize: function() {
            //track every page route in google analytics
            this.bind('route', this.trackPageview);
        },
        trackPageview: function() {
            //lets Google Analytics work its magnificent tracking magic
            var url = Backbone.history.getFragment();

            //prepend slash
            if (!/^\//.test(url) && url != '') {
                url = '/' + url;
            }
            _gaq.push(['_trackPageview', url]);
        }
    }),
    Controller = {
        //triggers take the form of:
        //modules handle the event bubbling
        //show-modulename-trigger
        home: function() {
            App.vent.trigger('show-page-home');
        },
        about: function() {
            App.vent.trigger('show-page-about');
        },
        artwork: function() {},
        blog: function() {
            App.vent.trigger('show-posts-blog');
        },
        blogTrack: function(id) {
            // fn must exist so ga can push it
            App.vent.trigger('show-posts-blog-post', id);
            //highlight the correct page
            App.vent.trigger('navigation-highlight', 'blog');
        }
    };
    var router = new Router({
        controller: Controller
    });
    return router;
});