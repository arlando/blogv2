define([
    'backbone',
    'hbs!tmpl/item/currentPost_tmpl'
],
function( Backbone, CurrentpostTmpl  ) {
    'use strict';

    /* Return a ItemView class definition */
    return Backbone.Marionette.ItemView.extend({
        initialize: function() {
             this.listenTo(this.model, 'change', this.render);
        },
        template: CurrentpostTmpl,


        /* ui selector cache */
        ui: {},

        /* Ui events hash */
        events: {},

        /* on render callback */
        onRender: function() {}
    });

});
