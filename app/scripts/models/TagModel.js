define([
    'backbone',
    'models/AuthModel'
],
function( Backbone, AuthModel ) {
    'use strict';
    return AuthModel.extend({
        url: '/api/v1/tags/',
        defaults: {
            name: ''
        }
    });
});
