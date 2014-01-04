define([
    'backbone',
    'models/TagModel'
],
function( Backbone, Tag ) {
    'use strict';

    /* Return a collection class definition */
    return Backbone.Collection.extend({
        model: Tag,
        url: '/api/v1/tags',
        initialize: function() {
            console.log("initialize a Tagcollection collection");
        }
    });
});
