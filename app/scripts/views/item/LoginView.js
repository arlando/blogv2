define([
    'backbone',
    'hbs!tmpl/item/LoginView_tmpl',
    'application'
],
function( Backbone, LoginviewTmpl, App ) {
    'use strict';
    return Backbone.Marionette.ItemView.extend({
        template: LoginviewTmpl,
        events: {
            'click .submit-login': 'login'
        },
        login: function (e) {
            if (e) {
                e.preventDefault();
            }
            var user = $('.login-form-user').val(),
                pass = $('.login-form-pass').val();

            $.post('api/v1/login',
                {
                    username: user,
                    password: pass
                })
                .success(function(data) {
                    //variables set for token and authenticating future reqs
                    App.session = {};
                    App.session.token = data.token;
                    App.session.username = data.username;
                    App.session.userid = data.id;
                    Backbone.history.navigate('#insert', {trigger:true});
                })
                .fail(function() {
                    Backbone.history.navigate('/', {trigger:true});
                });
        }
    });
});