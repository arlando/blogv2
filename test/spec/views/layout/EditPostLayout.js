(function() {
	'use strict';

	var root = this;

	root.define([
		'views/layout/EditPostLayout'
		],
		function( Editpostlayout ) {

			describe('Editpostlayout Layout', function () {

				it('should be an instance of Editpostlayout Layout', function () {
					var EditPostLayout = new Editpostlayout();
					expect( EditPostLayout ).to.be.an.instanceof( Editpostlayout );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );