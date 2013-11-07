require([
	'backbone',
	'application',
    'collections/PostsCollection',
    'views/composite/PaginatedPosts',
    'views/layout/PostsLayout'
],
function( Backbone, App, Posts, PostsPaginationView,  PostsLayout ) {
	return App.module("posts", function() {

        App.addRegions({
            posts: '#main-content'
        });

        App.addInitializer( function() {
            var //postsLayout = new PostsLayout(),
                posts = new Posts(),
                postsView,
                self = this;

            var promise = posts.baucis();
            promise.done(function(){
                self.postsView = new PostsPaginationView({collection: posts});
                App.posts.show(self.postsView);
            });
        });
	});
});