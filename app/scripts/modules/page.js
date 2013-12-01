define([
    'backbone',
    'application',
    'views/item/AboutView',
    'views/item/HomeView',
    'views/item/hibiscus'
],
function( Backbone, App, AboutView, HomeView ) {
    //this module holds individual pages and swaps out
    //the 'page' on the main-content layout
    return App.module('page', function() {
        App.addRegions({
            page: '#main-content'
        });

        App.vent.on('show-page-about', function() {
            var aboutPage = new AboutView(); 
            App.page.show(aboutPage);
        });

        App.vent.on('show-page-home', function() {
            var homePage = new HomeView();
            App.page.show(homePage);
        });

        App.vent.on('show-page-hibiscus', function() {
            var hibiscusPage = new HibiscusView();
            App.page.show(hibiscusPage);
        });
    });
});