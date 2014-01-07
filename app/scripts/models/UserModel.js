define([
    'backbone'
],
function( Backbone ) {
    'use strict';
    /* Return a model class definition */
    return Backbone.Model.extend({
        idAttribute: '_id',
        initialize: function(){},
        defaults: {}
    });
});
