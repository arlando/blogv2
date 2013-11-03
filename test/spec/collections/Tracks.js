(function() {
  'use strict';

  var root = this;

  root.define([
    'collections/Tracks'
    ],
    function( Tracks ) {

      describe('Tracks Collection', function () {

        it('should be an instance of Tracks Collection', function () {
          var Tracks = new Tracks();
          expect( Tracks ).to.be.an.instanceof( Tracks );
        });

        it('should have more test written', function(){
          expect( false ).to.be.ok;
        });
      });

    });

}).call( this );
