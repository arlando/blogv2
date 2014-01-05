define([
    'backbone',
    'hbs!tmpl/item/InsertTagItemView_tmpl'
],
function( Backbone, InserttagitemviewTmpl ) {
    'use strict';

    /* Return a ItemView class definition */
    return Backbone.Marionette.ItemView.extend({
        initialize: function() {
        },
        template: InserttagitemviewTmpl,
        ui: {},
        tagName: 'li',
        className: 'insert-tag',
        isAdded: false,
        events: {
            'click .add-tag': 'addTagToPost',
            'click .destroy-tag': 'destroyTag'
        },
        onRender: function() {},
        addTagToPost: function() {
            this.isAdded = !this.isAdded;
            this.$el.toggleClass('label-success')
                .toggleClass('add-tag');
            //this event tells the post to be inserted to add this tag
            (this.isAdded) ? this.trigger('event:insert-tag-to-post') :
                this.trigger('event:remove-tag-from-post');
            return this;
        },
        destroyTag: function() {
            var oldurl = this.model.url,
                self = this,
                query;

            this.model.url = '/api/v1/delete/tag/' + this.model.id;
            //via HTTP REST spec delete requests are not supposed to have a body
            //so we have to add the correct query to the uri
            this.model.url += this.model.getQuery();
            debugger;
            this.model.destroy({
                success: function(){

                },
                error: function(){
                    self.model.url = oldurl;
                    console.log('deletion failed');
                }
            });
        }
    });
});