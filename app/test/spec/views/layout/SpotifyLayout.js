(function() {
	'use strict';

	var root = this;

	root.define([
		'views/layout/SpotifyLayout'
		],
		function( Spotifylayout ) {

			describe('Spotifylayout Layout', function () {

				it('should be an instance of Spotifylayout Layout', function () {
					var SpotifyLayout = new Spotifylayout();
					expect( SpotifyLayout ).to.be.an.instanceof( Spotifylayout );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );