require([
	'backbone',
	'application',
    'collections/PostsCollection',
    'views/composite/PaginatedPosts',
    'views/layout/PostsLayout'
],
function( Backbone, App, Posts, PostsPaginationView,  PostsLayout ) {
	return App.module("posts", function() {



        //postsLayout.on("show", function() {
         //   postsLayout.posts.show(postsView);
        //});

        App.addRegions({
            posts: '#blog'
        });

        App.addInitializer( function() {
            var //postsLayout = new PostsLayout(),
                posts = new Posts(),
                postsView,
                self = this;

            var promise = posts.baucis();
            promise.done(function(){
                self.postsView = new PostsPaginationView({collection: posts});
                console.log(self.postsView.el);
                App.posts.show(self.postsView);
            });


        });
	});
});