define([
    'backbone',
    'hbs!tmpl/composite/NavigationView_tmpl',

],
function( Backbone, NavigationviewTmpl, NavigationView  ) {
    'use strict';

    /* Return a CompositeView class definition */
    return Backbone.Marionette.CompositeView.extend({

        initialize: function() {
            console.log("initialize a Navigationview CompositeView");
        },


        template: NavigationviewTmpl,


        /* ui selector cache */
        ui: {},

        /* where are we appending the items views */

        itemViewContainer: '.navigation-links',

        /* Ui events hash */
        events: {},

        /* on render callback */
        onRender: function() {}
    });

});
