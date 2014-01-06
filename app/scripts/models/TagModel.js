define([
    'backbone',
    'models/AuthModel'
],
function( Backbone, AuthModel ) {
    'use strict';
    return AuthModel.extend({
        url: '/ap1/v1/tags/',
        defaults: {
            name: ''
        }
    });
});
