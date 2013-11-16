define(function() {
	'use strict';

	/* return an array of specs to be run */
	return {
		specs: ['spec/collections/PostsCollection.js',
		'spec/collections/Tracks.js',
		'spec/controllers/appController.js',
		'spec/exampleTest.js',
		'spec/models/PostModel.js',
		'spec/models/Track.js',
		'spec/models/pageModel.js',
		'spec/routers/BlogRouter.js',
		'spec/routers/approuter.js',
		'spec/views/collection/PostsCollectionView.js',
		'spec/views/collection/Tracks.js',
		'spec/views/composite/PaginatedPosts.js',
		'spec/views/item/AboutView.js',
		'spec/views/item/PostItemView.js',
		'spec/views/item/PostsPaginated.js',
		'spec/views/item/SpotifyPlayer.js',
		'spec/views/item/Track.js',
		'spec/views/item/currentPost.js',
		'spec/views/item/pageView.js',
		'spec/views/layout/PostsLayout.js',
		'spec/views/layout/SpotifyLayout.js'
		]
	};
});
