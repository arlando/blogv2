(function() {
	'use strict';

	var root = this;

	root.define([
		'views/item/AboutView'
		],
		function( Aboutview ) {

			describe('Aboutview Itemview', function () {

				it('should be an instance of Aboutview Itemview', function () {
					var AboutView = new Aboutview();
					expect( AboutView ).to.be.an.instanceof( Aboutview );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );