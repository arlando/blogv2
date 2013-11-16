define([
	'backbone',
	'hbs!tmpl/item/AboutView_tmpl'
],
function( Backbone, AboutviewTmpl  ) {
    'use strict';

	/* Return a ItemView class definition */
	return Backbone.Marionette.ItemView.extend({

		initialize: function() {
			console.log("initialize a Aboutview ItemView");
		},
		
    	template: AboutviewTmpl
	});

});
