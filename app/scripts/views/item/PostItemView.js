define([
	'backbone',
	'hbs!tmpl/item/PostItemView_tmpl'
],
function( Backbone, PostitemviewTmpl  ) {
    'use strict';

	/* Return a ItemView class definition */
	return Backbone.Marionette.ItemView.extend({

		initialize: function() {},
		
    	template: PostitemviewTmpl,
        tagName: 'div',
        className: 'post',
        renderCount: 0,
        

    	/* ui selector cache */
    	ui: {},

		/* Ui events hash */
		events: {},

		/* on render callback */
		onRender: function() {},
        render: function () {
            //render if we have not gone past our paginated limit
            if (this.renderCount < this.rendersAllowed) {
                this.isClosed = false;

                this.triggerMethod("before:render", this);
                this.triggerMethod("item:before:render", this);

                var data = this.serializeData();
                data = this.mixinTemplateHelpers(data);

                var template = this.getTemplate();
                var html = Backbone.Marionette.Renderer.render(template, data);

                this.$el.html(html);
                this.bindUIElements();

                this.triggerMethod("render", this);
                this.triggerMethod("item:rendered", this);

                return this;
            }
        },

	});

});