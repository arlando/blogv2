define([
    'backbone',
    'hbs!tmpl/item/AboutView_tmpl'
],
function( Backbone, AboutviewTmpl  ) {
    'use strict';
    return Backbone.Marionette.ItemView.extend({
        template: AboutviewTmpl,
        className: 'about'
    });
});
