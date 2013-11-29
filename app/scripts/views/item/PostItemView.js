define([
    'backbone',
    'hbs!tmpl/item/PostItemView_tmpl'
],
function( Backbone, PostitemviewTmpl  ) {
    'use strict';

    /* Return a ItemView class definition */
    return Backbone.Marionette.ItemView.extend({
        template: PostitemviewTmpl,
        tagName: 'li',
        className: 'post-title',
        events: {
            'click' : 'triggerCurrentPost'
        },
        initialize: function() {
            this.model.on('change:selected', this.render);
        },
        onBeforeRender: function() {
            this.$el.attr('data-post-cid', this.model.cid); //should only set this once            if (this.model.get('active')) {
            if (this.model.get('selected')) {
                this.addActive();
            } else {
                this.removeActive();
            }
        },
        addActive: function() {
            this.$el.addClass('active-post');
        },
        removeActive: function() {
            this.$el.removeClass('active-post');
        },
        triggerCurrentPost: function() {
            //trigger the event post and postlayouts will pick it up
            this.trigger('event:show-post');
        }
    });
});