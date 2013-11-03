define([],
function() {
    'use strict';

    //A Baucis utility function for making requests to a Baucis API.
    return function baucisFetch (options, fetchOptions) {
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
    };
});