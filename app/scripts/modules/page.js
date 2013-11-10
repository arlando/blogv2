require([
    'backbone',
    'application',
    'models/pageModel',
    'views/item/pageView'
],
function( Backbone, App, PageModel, PageView ) {
    return App.module("page", function() {
        App.addRegions({
            page: '#main-content'
        });

        App.vent.on('show-about', function() {
            var about = new PageModel({content:'<h1>Hello</h1>'}),
                aboutPage = new PageView({model:about}); 
            App.page.show(aboutPage);
        });
    });
});