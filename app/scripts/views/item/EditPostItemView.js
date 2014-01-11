define([
    'backbone',
    'hbs!tmpl/item/EditPostItemView_tmpl'
],
function( Backbone, EditpostitemviewTmpl  ) {
    'use strict';

    /* Return a ItemView class definition */
    return Backbone.Marionette.ItemView.extend({

        initialize: function() {
        },
        className: 'edit-post-form',
        tagName: 'form',
        template: EditpostitemviewTmpl,
        /* ui selector cache */
        ui: {},
        /* Ui events hash */
        events: {
            'click .edit-post-save': 'updatePost',
            'click .edit-post-delete': 'deletePost'
        },
        /* on render callback */
        onRender: function() {},
        updatePost: function(e) {
            var self = this;
            if (e) {
                e.preventDefault();
            }
            this.$el.serializeArray().forEach(function (entry) {
                self.model.set(entry.name, entry.value);
            });
            var oldurl = this.model.url;
            this.model.url += this.model.get('_id');
            this.model.session().save().success(function (data) {
                    console.log('saved: ', data);
                    self.$el.append('updated!');
                }
            );
            this.model.url = oldurl;
        },
        deletePost: function(e) {
            var self = this;
            if (e) {
                e.preventDefault();
            }
            if (window.confirm('are you sure')) {
                var del = this.model.get('deleted');
                var oldurl = this.model.url;
                this.model.url += this.model.get('_id');
                this.model.set('deleted', !del );
                this.model.save().success(function () {
                    self.$el.append('deleted!');
                });
                this.model.url = oldurl;
            }
        }
    });
});
