define([
    'backbone',
    'communicator'
],

function( Backbone, Communicator ) {
    'use strict';

    var App = new Backbone.Marionette.Application();

    App.addInitializer( function() {
        Communicator.mediator.trigger("APP:START");
        if (Backbone.history) {
            Backbone.history.start();
        }
    });

    return App;
});
