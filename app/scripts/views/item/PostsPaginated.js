define([
    'backbone',
    'hbs!tmpl/item/PostsPaginated_tmpl'
],
function( Backbone, PostspaginatedTmpl  ) {
    'use strict';
    return Backbone.Marionette.ItemView.extend({
        template: PostspaginatedTmpl,
        tagName: 'div',
        className: 'posts-pagination',
        events: {
            'click .posts-pagination-next': 'nextPage',
            'click .posts-pagination-previous': 'previousPage'
        }
    });
});
