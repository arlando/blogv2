(function() {
	'use strict';

	var root = this;

	root.define([
		'views/item/NewsletterView'
		],
		function( Newsletterview ) {

			describe('Newsletterview Itemview', function () {

				it('should be an instance of Newsletterview Itemview', function () {
					var NewsletterView = new Newsletterview();
					expect( NewsletterView ).to.be.an.instanceof( Newsletterview );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );