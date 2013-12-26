(function() {
	'use strict';

	var root = this;

	root.define([
		'views/item/insertPostView'
		],
		function( Insertpostview ) {

			describe('Insertpostview Itemview', function () {

				it('should be an instance of Insertpostview Itemview', function () {
					var insertPostView = new Insertpostview();
					expect( insertPostView ).to.be.an.instanceof( Insertpostview );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );