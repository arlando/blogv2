define([
    'backbone',
    'hbs!tmpl/item/NavigationView_tmpl'
],
function( Backbone, NavigationviewTmpl  ) {
    'use strict';
    return Backbone.Marionette.ItemView.extend({
        tagName: 'li',
        className: 'navigation-link',
        template: NavigationviewTmpl
    });
});
