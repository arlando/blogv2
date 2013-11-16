define([
	'backbone',
	'hbs!tmpl/item/HomeView_tmpl'
],
function( Backbone, HomeviewTmpl  ) {
    'use strict';

	/* Return a ItemView class definition */
	return Backbone.Marionette.ItemView.extend({

		initialize: function() {
			console.log("initialize a Homeview ItemView");
		},
		
    	template: HomeviewTmpl,
        

    	/* ui selector cache */
    	ui: {},

		/* Ui events hash */
		events: {},

		/* on render callback */
		onRender: function() {}
	});

});
