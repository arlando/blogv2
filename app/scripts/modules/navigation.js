define([
    'backbone',
    'application',
    'views/collection/NavigationView'
],
function( Backbone, App, NavigationView ) {
    return App.module("navigation", function() {
        //this app manages the links on the homepage
        var links = new Backbone.Collection([
                {name:'Home', klass: '', glyphicon: 'home' },
                {name:'About', klass: 'about', glyphicon: 'question-sign' },
                {name:'Artwork', klass: 'artwork', glyphicon: 'picture' },
                {name:'Blog', klass: 'blog', glyphicon: 'eye-open' }
            ]),
            navigationView;

        App.addRegions({
            navigation: '.layout-navigation'
        });

        App.addInitializer( function() {
            navigationView = new NavigationView({collection : links});
            navigationView.setCurrentPage();
            App.navigation.show(navigationView);
        });
    });
});