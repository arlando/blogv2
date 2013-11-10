(function() {
	'use strict';

	var root = this;

	root.define([
		'views/item/pageView'
		],
		function( Pageview ) {

			describe('Pageview Itemview', function () {

				it('should be an instance of Pageview Itemview', function () {
					var pageView = new Pageview();
					expect( pageView ).to.be.an.instanceof( Pageview );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );