require([
	'backbone',
	'application',
    'collections/PostsCollection',
    'views/composite/PaginatedPosts',
    'views/layout/PostsLayout'
],
function( Backbone, App, Posts, PostsPaginationView,  PostsLayout ) {
	return App.module("posts", function() {
        var posts = new Posts(),
            postsView,
            self = this;
        
        //whena user clicks on the show blog route trigger this vent
        App.vent.on('show-blog', function() {
            //if we have already fetched the posts and rendered the view before
            if ( posts.length > 0 && self.postsView ) {
                //shows the the view again
                App.page.show(self.postsView)
            } else {
                //else load it
                var promise = posts.baucis();
                promise.done(function() {
                    self.postsView = new PostsPaginationView({collection: posts});
                    App.page.show(self.postsView);
                });
            }
        });

        App.addRegions({
            page: '#main-content'
        });
	});
});