define([
    'backbone',
    'hbs!tmpl/item/insertPostView_tmpl',
    'application'
],
function( Backbone, InsertpostviewTmpl ) {
    'use strict';

    /* Return a ItemView class definition */
    return Backbone.Marionette.ItemView.extend({
        initialize: function() {},
        tagName: 'div',
        className: 'insert-post',
        template: InsertpostviewTmpl,
        /* ui selector cache */
        ui: {},
        /* Ui events hash */
        events: {
            'click .insert-post-save': 'savePost'
        },
        /* on render callback */
        onRender: function() {},
        addTag: function(tagName) {
            this.model.get('tags').push(tagName);
        },
        removeTag: function(tagName) {
            this.model.set('tags', _.without(this.model.tags, tagName));
        },
        savePost: function (e) {
            if (e) {
                e.preventDefault();
            }

            var self = this,
                unindexedArray = this.$el.find('.insert-post-form');

            //set all form inputs for the model
            _.map(unindexedArray[0], function(input) {
                self.model.set(input.name, input.value);
            });

            //use the real ultimate power of promises
            this.model.save()
                .success(function(model) {
                    Backbone.history.navigate('#blog/' + model._id, {trigger: true});
                })
            .fail(function() {
                    Backbone.history.navigate('#login', {trigger: true});
                });

        }
    });

});
