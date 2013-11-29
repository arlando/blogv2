//TODO DELETE THE NAVIGATION COMPOSITE VIEW
define([
    'backbone',
    'hbs!tmpl/composite/NavigationView_tmpl',
],
function( Backbone, NavigationviewTmpl ) {
    'use strict';
    return Backbone.Marionette.CompositeView.extend({
        initialize: function() {
            console.log("initialize a Navigationview CompositeView");
        },
        template: NavigationviewTmpl,
        itemViewContainer: '.navigation-links'
    });
});
