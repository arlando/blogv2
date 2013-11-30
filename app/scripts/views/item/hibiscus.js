define([
    'backbone',
    'hbs!tmpl/item/hibiscus_tmpl',
    'socketHook'
],
function( Backbone, HibiscusTmpl, socket ) {
    'use strict';
    return Backbone.Marionette.ItemView.extend({

        initialize: function() {

        },

        template: HibiscusTmpl,


        /* ui selector cache */
        ui: {},

        /* Ui events hash */
        events: {},

        /* on render callback */
        onRender: function() {}
    });

});
