(function() {
	'use strict';

	var root = this;

	root.define([
		'views/collection/InsertTagCollectionView'
		],
		function( Inserttagcollectionview ) {

			describe('Inserttagcollectionview Collectionview', function () {

				it('should be an instance of Inserttagcollectionview Collectionview', function () {
					var InsertTagCollectionView = new Inserttagcollectionview();
					expect( InsertTagCollectionView ).to.be.an.instanceof( Inserttagcollectionview );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );