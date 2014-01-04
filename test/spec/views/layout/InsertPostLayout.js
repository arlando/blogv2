(function() {
	'use strict';

	var root = this;

	root.define([
		'views/layout/InsertPostLayout'
		],
		function( Insertpostlayout ) {

			describe('Insertpostlayout Layout', function () {

				it('should be an instance of Insertpostlayout Layout', function () {
					var InsertPostLayout = new Insertpostlayout();
					expect( InsertPostLayout ).to.be.an.instanceof( Insertpostlayout );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );