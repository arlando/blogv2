(function() {
	'use strict';

	var root = this;

	root.define([
		'models/TagModel'
		],
		function( Tagmodel ) {

			describe('Tagmodel Model', function () {

				it('should be an instance of Tagmodel Model', function () {
					var TagModel = new Tagmodel();
					expect( TagModel ).to.be.an.instanceof( Tagmodel );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );