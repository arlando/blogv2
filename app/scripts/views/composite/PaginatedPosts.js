define([
	'backbone',
	'hbs!tmpl/composite/PaginatedPosts_tmpl',
    'views/item/PostItemView'
],
function( Backbone, PaginatedpostsTmpl, PostItemView  ) {
    'use strict';

	/* Return a CompositeView class definition */
	return Backbone.Marionette.CompositeView.extend({

		initialize: function() {
            //set the total length
            this.total = this.collection.length;
		},
		
    	itemView: PostItemView,
    	template: PaginatedpostsTmpl,

    	/* ui selector cache */
    	ui: {},


    	/* where are we appending the items views */
    	itemViewContainer: '.posts',

		/* Ui events hash */
		events: {
            'click .posts-pagination-previous': 'previousPage',
            'click .posts-pagination-next': 'nextPage'
        },

		/* on render callback */
		onRender: function() {},

        //pass information the template
        serializeData: function() {
            var viewData = this.pageInfo(),
                showPagination = (viewData.pages > 1);
            //extend the viewdata with the pagination hook
            _.extend(viewData, {showPagination: showPagination});
            return viewData;
        },
        
        //Pagination Stuff I may make this CompositeView extend from another which has this functionality
        //inspired by: https://gist.github.com/io41/838460
        //fake pagination logic
        page: 1,
        currentRender: 0,
        perPage: 3,
        onBeforeItemAdded: function(itemView) {
            //increment the currentrender
            itemView.rendersAllowed = this.perPage;
            itemView.renderCount = this.currentRender;
            this.currentRender++;
        },
        pageInfo: function() {
            var info = {
                total: this.collection.length,
                page: this.page,
                perPage: this.perPage,
                pages: Math.ceil(this.total / this.perPage),
                prev: false,
                next: false
            };

            var max = Math.min(this.total, this.page * this.perPage);

            if (this.total == this.pages * this.perPage) {
                max = this.total;
            }

            info.range = [(this.page - 1) * this.perPage + 1, max];

            if (this.page > 1) {
                info.prev = this.page - 1;
            }

            if (this.page < info.pages) {
                info.next = this.page + 1;
            }

            return info;
        },
        nextPage: function() {
            console.log('next');
            debugger;
            var skip = this.getSkipFrom();
            if (!this.pageInfo().next) {
                return false;
            }
            this.page = this.page + 1;
            return this.collection.slice(skip, skip + this.perPage);
        },
        previousPage: function() {
            var skip = this.getSkipFrom();
            if (!this.pageInfo().prev) {
                return false;
            }
            this.page = this.page - 1;
            return this.collection.slice(skip, skip + this.perPage);
        },
        getSkipFrom: function() {
            return ( this.page * this.perPage ) - this.perPage;
        }
	});

});
