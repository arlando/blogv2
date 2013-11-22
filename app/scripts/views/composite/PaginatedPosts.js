define([
    'backbone',
    'views/item/PostItemView'
],
function( Backbone, PostItemView  ) {
    'use strict';

    /* Return a CompositeView class definition */
    return Backbone.Marionette.CollectionView.extend({
        itemView : PostItemView,
        tagName : 'ul',
        className : 'posts-titles',
        events : {
           // 'click li' : 'changeCurrentPost'
        },
        currentPost: void 0,
        onBeforeRender : function() {
            if (this.currentPost === void 0) {
                this.setCurrentPost();
            }
        },
        setCurrentPost : function() {
            //get the selected post
            console.log('current post', this.getSelectedPost());
            this.currentPost = this.getSelectedPost() || this.collection.at(0);
            return this.currentPost.set('selected', true);
        },
        getSelectedPost: function() {
            this.collection.find( function (post) {
                return post.get('selected') === true;
            });
        },
        changeCurrentPost: function(model) {
            var navLink = this.collection.get(model);
            if ( !navLink.get('selected') ) {
                //find the current page toggle the state
                this.currentPost.set('selected', false);
                var isActive = navLink.get('selected');
                navLink.set('selected', true);
                this.currentPost = navLink;
            }
        }
    });
});