define([
    'backbone',
    'hbs!tmpl/layout/EditPostLayout_tmpl'
],
function( Backbone, EditpostlayoutTmpl  ) {
    'use strict';

    /* Return a Layout class definition */
    return Backbone.Marionette.Layout.extend({
        initialize: function() {
            console.log("initialize a Editpostlayout Layout");
        },
        template: EditpostlayoutTmpl,
        /* Layout sub regions */
        className: 'layout-edit',
        regions: {
            editPost: '.layout-edit-post'
        },
        /* ui selector cache */
        ui: {},
        /* Ui events hash */
        events: {},
        /* on render callback */
        onRender: function() {}
    });

});
