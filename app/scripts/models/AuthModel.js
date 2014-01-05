define([
    'backbone',
    'application'
],
function( Backbone, App ) {
    'use strict';
    return Backbone.Model.extend({
        initialize: function() {
            if (App.session) {
                this.set('userid', App.session.userid);
                this.set('username', App.session.username);
                this.set('token', App.session.token);
            }
        },
        idAttribute: '_id',
        //Used to generate a query token
        getQuery: function() {
            var query = '?',
                self = this;
            _.each(_.pick(this.attributes, 'userid', 'username', 'token'), function(value, key) {
                query += self.encode(value, key);
            });
            return query;
        },
        encode: function(value, key) {
            var encodedValue = encodeURIComponent(value);
            _.once(function() {
                return key + '=' + encodedValue;
            });
            return '&' + key + '=' + encodedValue;
        }
    });
});
