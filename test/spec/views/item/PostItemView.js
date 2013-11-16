(function() {
	'use strict';

	var root = this;

	root.define([
		'views/item/PostItemView'
		],
		function( Postitemview ) {

			describe('Postitemview Itemview', function () {

				it('should be an instance of Postitemview Itemview', function () {
					var PostItemView = new Postitemview();
					expect( PostItemView ).to.be.an.instanceof( Postitemview );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );