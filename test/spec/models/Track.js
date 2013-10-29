(function() {
	'use strict';

	var root = this;

	root.define([
		'models/Track'
		],
		function( Track ) {

			describe('Track Model', function () {

				it('should be an instance of Track Model', function () {
					var Track = new Track();
					expect( Track ).to.be.an.instanceof( Track );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );