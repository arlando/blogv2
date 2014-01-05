(function() {
	'use strict';

	var root = this;

	root.define([
		'models/AuthModel'
		],
		function( Authmodel ) {

			describe('Authmodel Model', function () {

				it('should be an instance of Authmodel Model', function () {
					var AuthModel = new Authmodel();
					expect( AuthModel ).to.be.an.instanceof( Authmodel );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );