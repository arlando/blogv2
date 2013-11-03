require([
	'backbone',
	'application',
    'collections/PostsCollection',
    'views/collection/PostsCollectionView',
    'views/layout/PostsLayout'
],
function( Backbone, App, Posts, PostsCollectionView, PostsLayout ) {
	return App.module("posts", function() {

        var postsLayout = new PostsLayout(),
            posts = new Posts();

        //TODO sort by most recent
        posts.baucis({
            skip: 4,
            limit: 2,
        });

        postsView = new PostsCollectionView({ collection: posts });

        postsLayout.on("show", function() {
            postsLayout.posts.show(postsView);
        });

        postsLayout.render();

        App.addRegions({
            posts: '#blog'
        });

        App.addInitializer( function() {
            App.posts.show(postsLayout);
        });
	});
});