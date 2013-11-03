(function() {
	'use strict';

	var root = this;

	root.define([
		'views/collection/Tracks'
		],
		function( Tracks ) {

			describe('Tracks Collectionview', function () {

				it('should be an instance of Tracks Collectionview', function () {
					var Tracks = new Tracks();
					expect( Tracks ).to.be.an.instanceof( Tracks );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );