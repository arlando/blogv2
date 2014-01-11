define([
    'backbone',
    'hbs!tmpl/item/ContactView_tmpl'
],
function( Backbone, ContactviewTmpl  ) {
    'use strict';
    return Backbone.Marionette.ItemView.extend({
        template: ContactviewTmpl,
        className: 'contact'
    });
});
