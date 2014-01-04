define([
    'backbone',
    'application',
    'views/item/LoginView',
    'models/UserModel'
],
    function( Backbone, App, LoginView, UserModel ) {
        'use strict';
        return App.module('login', function() {
            var user = new UserModel();
            //this module allows me to add new posts to the site
            App.addRegions({
                login: '#main-content'
            });
            App.vent.on('show-login', function() {
                var loginView = new LoginView({model: user});
                App.login.show(loginView);
            });
        });
    });
