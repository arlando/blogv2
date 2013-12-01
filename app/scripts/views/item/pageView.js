define([
    'backbone',
    'hbs!tmpl/item/pageView_tmpl'
],
function( Backbone, PageviewTmpl  ) {
    'use strict';
    return Backbone.Marionette.ItemView.extend({
        initialize: function() {
            console.log("initialize a Pageview ItemView");
        },
        template: PageviewTmpl
    });
});
