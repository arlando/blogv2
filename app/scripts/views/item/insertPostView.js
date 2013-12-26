define([
    'backbone',
    'hbs!tmpl/item/insertPostView_tmpl'
],
function( Backbone, InsertpostviewTmpl ) {
    'use strict';

    /* Return a ItemView class definition */
    return Backbone.Marionette.ItemView.extend({

        initialize: function() {
        },

        template: InsertpostviewTmpl,


        /* ui selector cache */
        ui: {},

        /* Ui events hash */
        events: {
            'click .insert-post-save': 'save'
        },

        /* on render callback */
        onRender: function() {},
        save: function (e) {
            if (e) {
                e.preventDefault();
            }
            var self = this,
                unindexedArray = this.$el.find('.insert-post-form'),
                oldurl;

            //set all form inputs for the model
            _.map(unindexedArray[0], function(input) {
                self.model.set(input.name, input.value);
            });
            oldurl = this.model.url;
            this.model.url = 'api/v1/insert';
            //use the real ultimate power of promises
            this.model.save().done(function(model) {
                    Backbone.history.navigate('#blog/' + model._id, {trigger:true});
                })
            .fail(function() {
                    window.alert('Failed to add new post!');
                });
            this.model.url = oldurl;
        }
    });

});
