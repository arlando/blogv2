define([
    'backbone',
    'models/Track'
],
function( Backbone, Track ) {
    'use strict';
    return Backbone.Collection.extend({
        model: Track
    });
});