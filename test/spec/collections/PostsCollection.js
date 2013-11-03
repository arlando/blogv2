(function() {
	'use strict';

	var root = this;

	root.define([
		'collections/PostsCollection'
		],
		function( Postscollection ) {

			describe('Postscollection Collection', function () {

				it('should be an instance of Postscollection Collection', function () {
					var PostsCollection = new Postscollection();
					expect( PostsCollection ).to.be.an.instanceof( Postscollection );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );