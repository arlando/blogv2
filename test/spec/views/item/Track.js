(function() {
	'use strict';

	var root = this;

	root.define([
		'views/item/Track'
		],
		function( Track ) {

			describe('Track Itemview', function () {

				it('should be an instance of Track Itemview', function () {
					var Track = new Track();
					expect( Track ).to.be.an.instanceof( Track );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );