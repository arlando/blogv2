(function() {
	'use strict';

	var root = this;

	root.define([
		'views/item/hibiscus'
		],
		function( Hibiscus ) {

			describe('Hibiscus Itemview', function () {

				it('should be an instance of Hibiscus Itemview', function () {
					var hibiscus = new Hibiscus();
					expect( hibiscus ).to.be.an.instanceof( Hibiscus );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );