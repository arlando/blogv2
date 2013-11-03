(function() {
        'use strict';

        var root = this;

        root.define([
                'routers/BlogRouter'
                ],
                function( Blogrouter ) {

                        describe('Blogrouter Router', function () {

                                it('should be an instance of Blogrouter Router', function () {
                                        var BlogRouter = new Blogrouter();
                                        expect( BlogRouter ).to.be.an.instanceof( Blogrouter );
                                });

                                it('should have more test written', function(){
                                        expect( false ).to.be.ok;
                                });
                        });

                });

}).call( this );