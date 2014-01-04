define([
    'backbone',
    'hbs!tmpl/item/insertPostView_tmpl',
    'application'
],
function( Backbone, InsertpostviewTmpl, App ) {
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
                unindexedArray = this.$el.find('.insert-post-form'),
                oldurl;

            //set all form inputs for the model
            _.map(unindexedArray[0], function(input) {
                self.model.set(input.name, input.value);
            });
            oldurl = this.model.url;
            this.model.url = 'api/v1/insert/post';

            //set authentication vars on the model
            //this should be a global which takes in a backbone.model and adds these things to it
            if (App.session) {
                this.model.set('userid', App.session.userid);
                this.model.set('username', App.session.username);
                this.model.set('token', App.session.token);
            } else {
                this.model.url = oldurl;
                Backbone.history.navigate('#login', {trigger: true});
            }

            //use the real ultimate power of promises
            this.model.save()
                .success(function(model) {
                    //this.trigger('event:insert-save-tags');
                    self.model.url = oldurl;
                    Backbone.history.navigate('#blog/' + model._id, {trigger: true});
                })
            .fail(function() {
                    self.model.url = oldurl;
                    Backbone.history.navigate('#login', {trigger: true});
                });

        }
    });

});
