define([
    'backbone',
    'hbs!tmpl/item/currentPost_tmpl'
],
function( Backbone, CurrentpostTmpl  ) {
    'use strict';
    return Backbone.Marionette.ItemView.extend({
        initialize: function() {
             this.listenTo(this.model, 'change', this.render);
        },
        template: CurrentpostTmpl,
        onBeforeRender: function() {
            if (!this.model.has('created')) {
                var created = new Date(this.model.get('meta').created);
                this.model.set('created', created);
            }
        }
    });
});
