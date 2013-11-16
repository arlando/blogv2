require([
    'backbone',
    'application',
    'views/collection/NavigationView'
],
function( Backbone, App, NavigationView ) {
    return App.module("navigation", function() {
        //this app manages the links on the homepage
        var links = new Backbone.Collection([
                {name:'Home', klass: 'home' },
                {name:'About', klass: 'about' },
                {name:'Artwork', klass: 'artwork' },
                {name:'Blog', klass: 'blog' }
            ]),
            navigationView;

        App.addRegions({
            navigation: '#layout-navigation'
        });

        App.addInitializer( function() {
            navigationView = new NavigationView({collection : links});
            App.navigation.show(navigationView);
        });
    });
});