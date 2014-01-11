define([
    'backbone',
    'hbs!tmpl/item/NewsletterView_tmpl'
],
function( Backbone, NewsletterviewTmpl  ) {
    'use strict';
    return Backbone.Marionette.ItemView.extend({
        template: NewsletterviewTmpl,
        className: 'newsletter'
    });
});
