(function() {
	'use strict';

	var root = this;

	root.define([
		'views/collection/PostsCollectionView'
		],
		function( Postscollectionview ) {

			describe('Postscollectionview Collectionview', function () {

				it('should be an instance of Postscollectionview Collectionview', function () {
					var PostsCollectionView = new Postscollectionview();
					expect( PostsCollectionView ).to.be.an.instanceof( Postscollectionview );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );