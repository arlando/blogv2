(function() {
	'use strict';

	var root = this;

	root.define([
		'views/item/InsertTagItemView'
		],
		function( Inserttagitemview ) {

			describe('Inserttagitemview Itemview', function () {

				it('should be an instance of Inserttagitemview Itemview', function () {
					var InsertTagItemView = new Inserttagitemview();
					expect( InsertTagItemView ).to.be.an.instanceof( Inserttagitemview );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );