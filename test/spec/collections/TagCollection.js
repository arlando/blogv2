(function() {
	'use strict';

	var root = this;

	root.define([
		'collections/TagCollection'
		],
		function( Tagcollection ) {

			describe('Tagcollection Collection', function () {

				it('should be an instance of Tagcollection Collection', function () {
					var TagCollection = new Tagcollection();
					expect( TagCollection ).to.be.an.instanceof( Tagcollection );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );