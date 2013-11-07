(function() {
	'use strict';

	var root = this;

	root.define([
		'views/composite/PaginatedPosts'
		],
		function( Paginatedposts ) {

			describe('Paginatedposts Compositeview', function () {

				it('should be an instance of Paginatedposts Compositeview', function () {
					var PaginatedPosts = new Paginatedposts();
					expect( PaginatedPosts ).to.be.an.instanceof( Paginatedposts );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );