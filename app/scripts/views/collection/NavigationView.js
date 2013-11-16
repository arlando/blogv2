define([
    'backbone',
    'views/item/NavigationView'
],
function( Backbone, Navigation ) {
    'use strict';
    return Backbone.Marionette.CollectionView.extend({
        tagName: 'ul',
        className: 'navigation',
        itemView: Navigation
    });
});
