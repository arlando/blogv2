define([
    'backbone',
    'hbs!tmpl/item/NavigationView_tmpl'
],
function( Backbone, NavigationviewTmpl  ) {
    'use strict';
    return Backbone.Marionette.ItemView.extend({
        tagName: 'li',
        className: 'navigation-link',
        template: NavigationviewTmpl,
        initialize: function() {
            this.model.on('change:active', this.render);
        },
        onBeforeRender: function() {
            this.$el.attr('data-navigation-cid', this.model.cid) //should only set this once
            if (this.model.get('active')) {
                this.addActive();
            } else {
                this.removeActive();
            }
        },
        addActive: function() {
            this.$el.addClass('active-nav');
        },
        removeActive: function() {
            this.$el.removeClass('active-nav');
        }
    });
});
