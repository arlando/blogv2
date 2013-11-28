define([
    'backbone',
    'models/PostModel'
],
function( Backbone, Post ) {
    'use strict';

    /* Return a collection class definition */
    return Backbone.Collection.extend({
        url: '/api/v1/posts',
        model: Post,
        initialize: function() {
            console.log("initialize a Postscollection collection");
        },
        baucis: function(options, fetchOptions) {
            fetchOptions = _.clone(fetchOptions || {});
            fetchOptions.data = {};

            if (options) {
                Object.keys(options).forEach(function (key) {
                    var value = options[key];
                    (typeof value === 'object') ? fetchOptions.data[key] = JSON.stringify(value) :
                        fetchOptions.data[key] = value;
                });
            }

            return this.fetch(fetchOptions);
        }
    });
});
