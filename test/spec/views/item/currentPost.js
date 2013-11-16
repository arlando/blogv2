(function() {
	'use strict';

	var root = this;

	root.define([
		'views/item/currentPost'
		],
		function( Currentpost ) {

			describe('Currentpost Itemview', function () {

				it('should be an instance of Currentpost Itemview', function () {
					var currentPost = new Currentpost();
					expect( currentPost ).to.be.an.instanceof( Currentpost );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );