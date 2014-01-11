define([
    'backbone',
    'models/TagModel'
],
function( Backbone, Tag ) {
    'use strict';
    return Backbone.Collection.extend({
        model: Tag,
        url: '/api/v1/tags'
    });
});
