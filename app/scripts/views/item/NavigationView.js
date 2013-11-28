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
        attributes: {},
        initialize: function() {
            this.model.on('change:active', this.render);
        },
        onBeforeRender: function() {

            //TODO: Figure out why off...
            //this.attributes.zxy = 'test-' + this.model.cid;

            this.$el.attr('href', this.model.get('klass'));
            this.$el.attr('data-navigation-cid', this.model.cid);
            //this.$el.attr('data-navigation-cid', this.model.cid) //should only set this once
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
