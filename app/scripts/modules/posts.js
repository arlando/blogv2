define([
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
            currentPost;

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
                //fetch it and execute on a promise
                var promise = posts.baucis();
                promise.done(function() {
                    postsView = new PostsPaginationView({collection: posts, model: posts.at(0)});
                    //make the first post the model for the view
                    currentPost = new CurrentPost({model: postsView.model});
                    App.page.show(postsLayout);
                });
            }
        });

        //this is for displaying a very particular posts in via the fragment
        App.vent.on('show-posts-blog-post', function(id) {
            if ( posts.length > 0 && postsLayout ) {
                //direct hit ... noop
          } else if ( posts.length > 0 && !postsLayout ) {
                //loading from another page
                App.page.show(postsLayout);
            } else {
                //not loaded at all
                //fetch it and execute on a promise
                var promise = posts.baucis();
                promise.done(function() {
                    //get the post from the app.vent
                    var postFromId = posts.find(function(post) {
                        return post.get('_id') === id;
                    });
                    postsView = new PostsPaginationView({collection: posts, model: postFromId || posts.at(0) });
                    //make the first post the model for the view
                    currentPost = new CurrentPost({model: postsView.model});
                    App.page.show(postsLayout);
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