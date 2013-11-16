(function() {
	'use strict';

	var root = this;

	root.define([
		'views/item/NavigationView'
		],
		function( Navigationview ) {

			describe('Navigationview Itemview', function () {

				it('should be an instance of Navigationview Itemview', function () {
					var NavigationView = new Navigationview();
					expect( NavigationView ).to.be.an.instanceof( Navigationview );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );