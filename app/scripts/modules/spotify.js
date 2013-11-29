define([
    'backbone',
    'application',
    'collections/Tracks',
    'views/item/SpotifyPlayer',
    'views/collection/Tracks',
    'views/layout/SpotifyLayout',
    'configuration/spotify'
],
function( Backbone, App, Tracks, SpotifyPlayer, TracksView, SpotifyLayout, options ){
    return App.module("spotify", function() {
        //controls the spotify module on the page
        var spotifyLayout = new SpotifyLayout(),
            tracksCollection = new Tracks(options.tracks),
            tracksView = new TracksView(
                    {collection : tracksCollection}
            ),
            player = new SpotifyPlayer(
                    //get the first track and use it as a base
                    {model : tracksCollection.at(0)}
            );

        //Do all this shit when show is called on the layout
        spotifyLayout.on('show', function() {
            spotifyLayout.tracks.show(tracksView);
            spotifyLayout.player.show(player);
        });

        //render the layout to have access to regions
        spotifyLayout.render();

        App.addRegions({
            spotify : options.layout
        });

        App.addInitializer( function() {
            App.spotify.show(spotifyLayout);
        });
    });
});
