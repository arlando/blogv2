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

            //set authentication vars on the model
            //this should be a global which takes in a backbone.model and adds these things to it
            if (window.lando) {
                this.model.set('userid', window.lando.userid);
                this.model.set('username', window.lando.username);
                this.model.set('token', window.lando.token);
            }

            //use the real ultimate power of promises
            this.model.save().done(function(model) {
                    Backbone.history.navigate('#blog/' + model._id, {trigger: true});
                })
            .fail(function() {
                    Backbone.history.navigate('#login', {trigger: true});
                });
            this.model.url = oldurl;
        }
    });

});
