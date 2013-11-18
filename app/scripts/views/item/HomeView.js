define([
    'backbone',
    'hbs!tmpl/item/HomeView_tmpl',
    'socketHook'
],
function( Backbone, HomeviewTmpl, socket ) {
    'use strict';
    return Backbone.Marionette.ItemView.extend({
        currentMessage: '',
        initialize: function() {
            //get the current message from the socketio store
            socket.emit('getmessage', function(message) {
                self.$el.val(message);
            });
        },
        template: HomeviewTmpl,
        tagName: 'textarea',
        className: 'home-socket',
        attributes: {
            'maxlength' : 512
        },

        /* Ui events hash */
        events: {
            'keypress' : 'updateHomeMessage'
        },

        /* on render callback */
        onRender: function() {
            var self = this;
            socket.on('updatemessage', function(message) {
                self.$el.val(message);
            });
        },
        updateHomeMessage: function() {
            socket.emit('sendmessage', this.$el.val());
        }
    });

});
