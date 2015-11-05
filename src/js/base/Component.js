goog.provide('app.base.Component');
goog.require('app.base.EventTarget');
goog.require('app.base.Template');
goog.require('app.base.ViewModel');



/**
 * @constructor
 * @extends {app.base.EventTarget}
 */
app.base.Component = function() {
    goog.base(this);
    this.register();
};
goog.inherits(app.base.Component, app.base.EventTarget);


/**
 * The name of the element in DOM and should be overriden by the implementer
 * @protected
 */
app.base.Component.prototype.name = 'default-component';


/**
 * ViewModel that will represent the element in DOM. Should be overriden by the implementer
 * @protected
 */
app.base.Component.prototype.viewModel = app.base.ViewModel;


/**
 * The template (captured in a string). Corresponding url 
 * should be provided by the implementer's template.
 * @protected
 */
app.base.Component.prototype.template = app.base.Template.$getHtmlSync('/js/base/DefaultTemplate.html');


/**
 * 
 * @protected
 */
app.base.Component.prototype.register = function(){
	var that = this;
	ko.components.register(this.name, {
		'viewModel': {
			'createViewModel': function(params, componentInfo){
				return new that.viewModel(params, componentInfo.element);
			}
		},
		'template': this.template
	});
};
