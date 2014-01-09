(function() {
	'use strict';

	var root = this;

	root.define([
		'views/item/EditPostItemView'
		],
		function( Editpostitemview ) {

			describe('Editpostitemview Itemview', function () {

				it('should be an instance of Editpostitemview Itemview', function () {
					var EditPostItemView = new Editpostitemview();
					expect( EditPostItemView ).to.be.an.instanceof( Editpostitemview );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );