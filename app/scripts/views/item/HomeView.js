define([
    'backbone',
    'hbs!tmpl/item/HomeView_tmpl',
    'socketHook'
],
function( Backbone, HomeviewTmpl, socket ) {
    'use strict';

    /* Return a ItemView class definition */
    return Backbone.Marionette.ItemView.extend({
        currentMessage: '',
        initialize: function() {
            //get the current message
            socket.emit('getmessage', function(message) {
                self.$el.val(message);
            });
        },

        template: HomeviewTmpl,
        tagName: 'input',
        className: 'homeSocketMessage',

        /* ui selector cache */
        ui: {},

        /* Ui events hash */
        events: {
            'keypress' : 'updateHomeMessage'
        },

        /* on render callback */
        onRender: function() {
            var self = this;
            socket.on('updatemessage', function(message) {
                debugger;
                self.$el.val(message);
            });
        },
        updateHomeMessage: function() {
            socket.emit('sendmessage', this.$el.val());
        }
    });

});
