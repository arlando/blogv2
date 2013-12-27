define([
    'backbone',
    'application',
    'views/item/LoginView'
],
    function( Backbone, App, LoginView ) {
        'use strict';
        return App.module('login', function() {
            //this module allows me to add new posts to the site
            App.addRegions({
                login: '#main-content'
            });
            App.vent.on('show-login', function() {
                var loginView = new LoginView();
                App.login.show(loginView);
            });
        });
    });
