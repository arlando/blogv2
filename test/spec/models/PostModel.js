(function() {
	'use strict';

	var root = this;

	root.define([
		'models/PostModel'
		],
		function( Postmodel ) {

			describe('Postmodel Model', function () {

				it('should be an instance of Postmodel Model', function () {
					var PostModel = new Postmodel();
					expect( PostModel ).to.be.an.instanceof( Postmodel );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );