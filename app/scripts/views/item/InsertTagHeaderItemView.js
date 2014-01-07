define([
    'backbone',
    'hbs!tmpl/item/inserttagheaderitemview_tmpl'
],
function( backbone, inserttagheaderitemviewtmpl  ) {
    'use strict';
    /* return a itemview class definition */
    return Backbone.Marionette.ItemView.extend({
        template: inserttagheaderitemviewtmpl,
        /* ui selector cache */
        ui: {
            input: '.new-tag'
        },
        className: 'add-new-tag',
        tagName: 'div',
        /* ui events hash */
        events: {
            'keypress .new-tag': 'addNewTag'
        },
        addNewTag: function(event) {
            var ENTER_KEY = 13;
            var tagName = this.ui.input.val().trim();
            if (event.which === ENTER_KEY && tagName) {
                this.collection.create({
                    name: tagName
                });
                this.ui.input.val('');
            }
        }
    });
});
