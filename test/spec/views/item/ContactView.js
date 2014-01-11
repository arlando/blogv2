(function() {
	'use strict';

	var root = this;

	root.define([
		'views/item/ContactView'
		],
		function( Contactview ) {

			describe('Contactview Itemview', function () {

				it('should be an instance of Contactview Itemview', function () {
					var ContactView = new Contactview();
					expect( ContactView ).to.be.an.instanceof( Contactview );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );