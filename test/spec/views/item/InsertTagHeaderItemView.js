(function() {
	'use strict';

	var root = this;

	root.define([
		'views/item/InsertTagHeaderItemView'
		],
		function( Inserttagheaderitemview ) {

			describe('Inserttagheaderitemview Itemview', function () {

				it('should be an instance of Inserttagheaderitemview Itemview', function () {
					var InsertTagHeaderItemView = new Inserttagheaderitemview();
					expect( InsertTagHeaderItemView ).to.be.an.instanceof( Inserttagheaderitemview );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );