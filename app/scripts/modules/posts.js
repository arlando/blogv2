require([
	'backbone',
	'application',
    'collections/PostsCollection',
    'views/composite/PaginatedPosts',
    'views/layout/PostsLayout',
    'views/item/CurrentPost'
],
function( Backbone, App, Posts, PostsPaginationView, PostsLayout, CurrentPost ) {
	return App.module("posts", function() {
        var posts = new Posts(),
            postsView,
            postsLayout = new PostsLayout(),
            currentPost,
            self = this;

        postsLayout.on('show', function() {
            postsLayout.posts.show(postsView);
            postsLayout.currentpost.show(currentPost);
        });
        
        //whenever user clicks on the show blog route trigger this vent
        App.vent.on('show-posts-blog', function() {
            //if we have already fetched the posts and rendered the view before... no point in doing it again
            if ( posts.length > 0 && postsView ) {
                //shows the the view again
                App.page.show(postsLayout);
            } else {
                //fetch it
                var promise = posts.baucis();

                //use the promising power
                promise.done(function() {
                    postsView = new PostsPaginationView({collection: posts, model: posts.at(0)});
                    //make the first post the model for the view
                    currentPost = new CurrentPost({model: postsView.model});
                    App.page.show(postsLayout);
                   // App.page.show(self.postsView);
                });
            }
        });

        //shows a single post
        App.vent.on('show-post', function(cid) {
            currentPost = new CurrentPost({model: posts.get(cid)});
            postsLayout.currentpost.show(currentPost);
        });

        App.addRegions({
            page: '#main-content'
        });
	});
});