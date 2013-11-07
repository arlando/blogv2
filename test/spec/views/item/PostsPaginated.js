(function() {
	'use strict';

	var root = this;

	root.define([
		'views/item/PostsPaginated'
		],
		function( Postspaginated ) {

			describe('Postspaginated Itemview', function () {

				it('should be an instance of Postspaginated Itemview', function () {
					var PostsPaginated = new Postspaginated();
					expect( PostsPaginated ).to.be.an.instanceof( Postspaginated );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );