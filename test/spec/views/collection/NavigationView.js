(function() {
	'use strict';

	var root = this;

	root.define([
		'views/collection/NavigationView'
		],
		function( Navigationview ) {

			describe('Navigationview Collectionview', function () {

				it('should be an instance of Navigationview Collectionview', function () {
					var NavigationView = new Navigationview();
					expect( NavigationView ).to.be.an.instanceof( Navigationview );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );