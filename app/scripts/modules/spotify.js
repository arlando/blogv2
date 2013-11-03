require([
	'backbone',
	'application',
	'collections/Tracks',
	'views/item/SpotifyPlayer',
	'views/collection/Tracks',
	'views/layout/SpotifyLayout'
],
function( Backbone, App, Tracks, SpotifyPlayer, TracksView, SpotifyLayout ){
	return App.module("spotify", function() {
		
		var spotifyLayout = new SpotifyLayout(),
			//bootstrappin' jack talkin
			tracksCollection = new Tracks([
					{id:1, title: 'Thing1', spotifyuri: '4YrRh7kNgbU2nB4eGIlKeM', artist:'Thing1', playing:true },
					{id:2, title: 'Thing2', spotifyuri: '6NdSZVSwqlNdkfee1byLAv', artist:'Thing2' },
					{id:3, title: 'Thing3', spotifyuri: '0AMMjcRxVNOnQjmdXNgF2e', artist:'Thing3' },
					{id:4, title: 'Thing4', spotifyuri: '5WACLmxePHgd45hptug9n1', artist:'Thing4' },
					{id:5, title: 'Thing5', spotifyuri: '2OCHjMefU4lUWLNz8sKw48', artist:'Thing5' }
				]);
			tracksView = new TracksView( 
					{collection : tracksCollection}
				),
			player = new SpotifyPlayer(
					//get the first track and use it as a based
					{model : tracksCollection.at(0)}
				);

		//Do all this shit when show is called on the layout
		spotifyLayout.on("show", function() {
			spotifyLayout.tracks.show(tracksView);
			spotifyLayout.player.show(player);
		});

		//render the layout to have access to regions
		spotifyLayout.render();

		//spotify app region
		App.addRegions({
			spotify : '#spotify'
		});

		//wreqr for global kommunicationz between views
		Backbone.on('update-spotify-player', function(model) {
			player.setURI(tracksView.getPlaying());
		})

		App.addInitializer( function() {
			App.spotify.show(spotifyLayout);
		});
	});

});
