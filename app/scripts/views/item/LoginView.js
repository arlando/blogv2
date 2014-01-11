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
            var login = {};
            login['username'] = $('.login-form-user').val();
            login['password'] = $('.login-form-pass').val();

            $.ajax({
                url: 'http://arlando.net/api/v1/login',
                type: 'POST',
                contentType: 'application/json',
                dataType: 'json',
                data: JSON.stringify(login)
            })
                .success(function(data) {
                    //variables set for token and authenticating future reqs
                    App.session = App.session || {};
                    App.session.token = data.token;
                    App.session.username = data.username;
                    App.session.userid = data.id;
                    Backbone.history.navigate(App.session.next, {trigger:true});
                })
                .fail(function() {
                    Backbone.history.navigate('/', {trigger:true});
                });
        }
    });
});