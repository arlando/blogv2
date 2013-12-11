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
            //current link is the current page on load
            //TODO fix current link in the navigation
            var currentKlass = Backbone.history.fragment.split('/');
            var currentlink = this.collection.find(function (navobj) {
                return navobj.get('klass') === currentKlass[0];
            });
            return ( currentlink ) ?
                currentlink.set('active', true) :
                //set home to active cause everything is haywire
                this.collection.at(0).set('active', true);
        },
        changePage: function(e) {
            var navLink = this.collection.get(e.currentTarget.getAttribute('data-navigation-cid'));
            var currentPage = this.getCurrentPage();

            //if the clicked link is not the currently active link was not clicked again
            if ( !navLink.get('active') ) {

                //find the current page toggle the state
                currentPage.set('active', false);
                var isActive = navLink.get('active');
                isActive = (isActive) ? false : true;
                navLink.set('active', isActive);

                //tell router to navigate to the appropriate link
                Backbone.history.navigate( navLink.get('klass'), {trigger: true} );
            }
        }
    });
});
