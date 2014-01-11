define([
    'backbone',
    'hbs!tmpl/layout/InsertLayout_tmpl'
],
function( Backbone, InsertpostlayoutTmpl  ) {
    'use strict';
    return Backbone.Marionette.Layout.extend({
        template: InsertpostlayoutTmpl,
        /* Layout sub regions */
        className: 'layout-insert',
        tagName: 'div',
        regions: {
            insertTag: '.layout-insert-tag',
            addTag: '.layout-add-tag',
            insertPost: '.layout-insert-post'
        },
        onRender: function() {
            //listen for the save call
            var self = this;
            this.listenTo(this.insertTag, 'show', function(view) {
                self.listenTo(view, 'itemview:event:insert-tag-to-post', self.addTagToPost);
            });
            this.listenTo(this.insertTag, 'show', function(view) {
                self.listenTo(view, 'itemview:event:remove-tag-from-post', self.removeTagFromPost);
            });
        },
        addTagToPost: function(args) {
            //tell the insert tag about the postModel, this postModel will have a
            //mongo id so we can now truly associate the tags with the mongo;
            this.insertPost.currentView.addTag(args.model.get('_id'));
        },
        removeTagFromPost: function(args) {
            this.insertPost.currentView.removeTag(args.model.get('_id'));
        }
    });
});
