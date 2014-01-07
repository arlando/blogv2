define([
    'backbone',
    'hbs!tmpl/item/InsertTagItemView_tmpl'
],
function( Backbone, InserttagitemviewTmpl ) {
    'use strict';
    var ENTER_KEY = 13,
        ESCAPE_KEY = 27;

    /* Return a ItemView class definition */
    return Backbone.Marionette.ItemView.extend({
        initialize: function() {
            this.listenTo(this.model, 'change', this.render, this);
        },
        template: InserttagitemviewTmpl,
        tagName: 'li',
        className: 'insert-tag',
        isAdded: false,
        ui: {
            edit: '.edit-tag'
        },
        events: {
            'click .add-tag': 'addTagToPost',
            'click .destroy-tag': 'destroyTag',
            'dblclick label': 'onEditDoubleClick',
            'keypress .edit-tag': 'onEditKeyPress',
            'blur .edit-tag': 'onEditBlur'
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
                self = this;

            this.model.url += this.model.id;
            //via HTTP REST spec delete requests are not supposed to have a body
            //so we have to add the correct query to the uri
            this.model.url += this.model.getQuery();
            this.model.destroy({
                success: function(){

                },
                error: function(){
                    self.model.url = oldurl;
                    console.log('deletion failed');
                }
            });
        },
        toggleEditingMode: function() {
            this.$el.toggleClass('editing');
        },
        onEditDoubleClick: function() {
            this.ui.edit.val(this.ui.edit.val());
            this.toggleEditingMode();
        },
        onEditKeyPress: function(event) {
            if (event.which === ENTER_KEY) {
                this.ui.edit.trigger('blur');
            }
            if (event.which === ESCAPE_KEY) {
                this.toggleEditingMode();
            }
        },
        onEditBlur: function(event) {
            this.value = event.target.value.trim();
            if (this.value) {
                var oldurl = this.model.url;
                this.model.url += this.model.get('_id');
                this.model.set('name', this.value).save();
                this.model.url = oldurl;
            } else {
                this.destroyTag();
            }
        }
    });
});