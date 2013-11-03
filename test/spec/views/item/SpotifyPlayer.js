(function() {
        'use strict';

        var root = this;

        root.define([
                'views/item/SpotifyPlayer'
                ],
                function( Spotifyplayer ) {

                        describe('Spotifyplayer Itemview', function () {

                                it('should be an instance of Spotifyplayer Itemview', function () {
                                        var SpotifyPlayer = new Spotifyplayer();
                                        expect( SpotifyPlayer ).to.be.an.instanceof( Spotifyplayer );
                                });

                                it('should have more test written', function(){
                                        expect( false ).to.be.ok;
                                });
                        });

                });

}).call( this );
