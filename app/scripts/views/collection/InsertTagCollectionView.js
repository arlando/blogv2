define([
    'backbone',
    'views/item/InsertTagItemView'
],
function( Backbone, InsertTagItemView ) {
    'use strict';
    return Backbone.Marionette.CollectionView.extend({
        initialize: function() {
        },
        tagName: 'div',
        className: 'insert-tags',
        itemView: InsertTagItemView,
        /* ui selector cache */
        ui: {},
        /* Ui events hash */
        events: {},
        /* on render callback */
        onRender: function() {}
    });
});
