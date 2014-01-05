define([
    'backbone',
    'models/AuthModel'
],
function( Backbone, AuthModel ) {
    'use strict';
    return AuthModel.extend({
        url: '/api/v1/posts',
        defaults : {
            tags: []
        },
        selected: false,
        //to get the CID for the template need to override jSON method
        toJSON: function() {
            var json = Backbone.Model.prototype.toJSON.apply(this, arguments);
            json.cid = this.cid;
            return json;
        },
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
        }
    });
});
