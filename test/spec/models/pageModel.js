(function() {
	'use strict';

	var root = this;

	root.define([
		'models/pageModel'
		],
		function( Pagemodel ) {

			describe('Pagemodel Model', function () {

				it('should be an instance of Pagemodel Model', function () {
					var pageModel = new Pagemodel();
					expect( pageModel ).to.be.an.instanceof( Pagemodel );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );