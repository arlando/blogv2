define([
	'backbone'
],
function( Backbone ) {
    'use strict';

	return Backbone.Marionette.Controller.extend({

		initialize: function( options ) {
			console.log("initialize a Appcontroller Controller");
		},  
        //should load the about page
        about: function() {
                console.log('ok');
        },
        //should load the artwork page
        artwork: function() {},
        //should load the blog
        blog: function() {

        }
	});

});
