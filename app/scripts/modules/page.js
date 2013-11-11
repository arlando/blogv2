require([
    'backbone',
    'application',
    'views/item/AboutView'
],
function( Backbone, App, AboutView ) {
    return App.module("page", function() {
        App.addRegions({
            page: '#main-content'
        });

        App.vent.on('show-about', function() {
            var aboutPage = new AboutView(); 
            App.page.show(aboutPage);
        });
    });
});