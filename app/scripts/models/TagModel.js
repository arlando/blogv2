define([
    'backbone',
    'models/AuthModel'
],
function( Backbone, AuthModel ) {
    'use strict';
    return AuthModel.extend({
        defaults: {
            name: ''
        },
    });
});
