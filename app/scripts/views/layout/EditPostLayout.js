define([
    'backbone',
    'hbs!tmpl/layout/EditPostLayout_tmpl'
],
function( Backbone, EditpostlayoutTmpl  ) {
    'use strict';
    return Backbone.Marionette.Layout.extend({
        template: EditpostlayoutTmpl,
        /* Layout sub regions */
        className: 'layout-edit',
        regions: {
            editPost: '.layout-edit-post'
        }
    });
});
