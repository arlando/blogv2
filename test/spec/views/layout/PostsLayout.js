(function() {
	'use strict';

	var root = this;

	root.define([
		'views/layout/PostsLayout'
		],
		function( Postslayout ) {

			describe('Postslayout Layout', function () {

				it('should be an instance of Postslayout Layout', function () {
					var PostsLayout = new Postslayout();
					expect( PostsLayout ).to.be.an.instanceof( Postslayout );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );