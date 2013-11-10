define([
	'backbone',
	'hbs!tmpl/item/pageView_tmpl'
],
function( Backbone, PageviewTmpl  ) {
    'use strict';

	/* Return a ItemView class definition */
	return Backbone.Marionette.ItemView.extend({

		initialize: function() {
			console.log("initialize a Pageview ItemView");
		},
		
    	template: PageviewTmpl,
        

    	/* ui selector cache */
    	ui: {},

		/* Ui events hash */
		events: {},

		/* on render callback */
		onRender: function() {}
	});

});
