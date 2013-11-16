define([
	'backbone',
	'hbs!tmpl/item/PostsPaginated_tmpl'
],
function( Backbone, PostspaginatedTmpl  ) {
    'use strict';

	/* Return a ItemView class definition */
	return Backbone.Marionette.ItemView.extend({		
    	template: PostspaginatedTmpl,
        tagName: 'div',
        className: 'posts-pagination',

        initialize: function() {},

    	/* ui selector cache */
    	ui: {},

		/* Ui events hash */
		events: {
            'click .posts-pagination-next': 'nextPage',
            'click .posts-pagination-previous': 'previousPage'
        }
	});

});
