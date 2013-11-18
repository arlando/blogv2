define([
    'backbone',
    'views/item/NavigationView'
],
function( Backbone, Navigation ) {
    'use strict';
    return Backbone.Marionette.CollectionView.extend({
        itemView: Navigation,
        tagName: 'ul',
        className: 'navigation',
        events: {
            'click li' : 'changePage'
        },
        initialize: function() {
            console.log('binxxg');
           // debugger;
            this.setCurrentPage();
        },
        getCurrentPage: function() {
            var current = this.collection.find( function(page) {
                return page.get('active') === true;
            });

            //UNLEASH THE HAMMER
            if (typeof current === 'undefined') {
                this.setCurrentPage();
                return this.getCurrentPage();
            }
            return current;
        },
        setCurrentPage: function() {
           // debugger;
           // console.log
            var currentlink = this.collection.find(function (navobj) {
                return navobj.get('klass') === Backbone.history.fragment;
            });

            if ( currentlink ) {
                currentlink.set('active', true);
            } else {
                //set home to active cause everything is haywire
                this.collection.at(0).set('active', true);
            }
            return currentlink;
        },
        changePage: function(e) {
            var navLink = this.collection.get(e.currentTarget.getAttribute('data-navigation-cid'));
            var currentPage = this.getCurrentPage();
            //debugger;
            //if the clicked link is not the currently active link was not clicked again
            if ( !navLink.get('active') ) {
                //find the current page toggle the state
                currentPage.set('active', false);
                //currentPage.removeActive();
               // debugger;
                //TODO fix this muy bad!
            //    debugger;
                var isActive = navLink.get('active');
                isActive = (isActive) ? false : true;
                navLink.set('active', isActive);
                //navLink.addActive();
            }
        }
    });
});
