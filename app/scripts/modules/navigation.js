require([
    'backbone',
    'application',
    'collections/LinksCollection',
    'views/item/NavigationView',
],
function( Backbone, App, Links, NavigationView) {
    return App.module("navigation", function() {
        var links = new Links([
                {name:'About', klass:'about'},
                {name:'Artwork', klass:'artwork'},
                {name:'Blog'. klass:'blog'}
            ]),
            navigationView = new NavigationView({collection: links});

        App.addRegions({
            navigation: '#navigation'
        });

        App.addInitializer( function() {
            App.navigation.show(navigationView);
        });
    });
});