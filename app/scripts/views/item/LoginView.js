define([
    'backbone',
    'hbs!tmpl/item/LoginView_tmpl'
],
function( Backbone, LoginviewTmpl  ) {
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
                .done(function() {
                    Backbone.history.navigate('/', {trigger:true});
                })
                .fail(function(){});
        }
    });

});
