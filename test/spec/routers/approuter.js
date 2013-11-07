(function() {
	'use strict';

	var root = this;

	root.define([
		'routers/approuter'
		],
		function( Approuter ) {

			describe('Approuter Router', function () {

				it('should be an instance of Approuter Router', function () {
					var approuter = new Approuter();
					expect( approuter ).to.be.an.instanceof( Approuter );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );