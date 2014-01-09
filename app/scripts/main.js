require([
    'backbone',
    'application',
    'regionManager',
    'modules/navigation',
    //'modules/spotify',
    'modules/page',
    'modules/posts',
    'modules/insertpost',
    'modules/editpost',
    'modules/login',
    'modules/router'
],
function ( Backbone, App ) {
    'use strict';
    App.start();
});
