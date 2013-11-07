define([
	'backbone'
],
function( Backbone ) {
    'use strict';

	/* Return a model class definition */
	return Backbone.Model.extend({
        url: '/api/v1/posts',
        baucis: function (options, fetchOptions) {
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
        },
    });
});
