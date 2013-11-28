define([
    'backbone',
    'application',
    'views/collection/NavigationView',
    'configuration/mainNavigation'
],
function( Backbone, App, NavigationView, options ) {
    return App.module("navigation", function() {
        //this app manages the links on the homepage
        var links = new Backbone.Collection(options.links),
            navigationView;

        App.addRegions({
            navigation: options.layout
        });

        App.addInitializer( function() {
            navigationView = new NavigationView({collection : links});
            navigationView.setCurrentPage();
            App.navigation.show(navigationView);
        });
    });
});