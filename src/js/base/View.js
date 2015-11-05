goog.provide('app.base.View');
goog.require('app.base.EventTarget');
goog.require('app.base.Template');



/**
 * @constructor
 * @extends {app.base.EventTarget}
 */
app.base.View = function(){
	goog.base(this);
};
goog.inherits(app.base.View, app.base.EventTarget);


/**
 * The name of the element in DOM and should be overriden by the implementer
 * @protected
 */
app.base.View.prototype.name = 'default-view';


/**
 * The template (captured in a string). Corresponding url should 
 * be provided by the implementer's template.
 * @protected
 */
app.base.View.prototype.template = app.base.Template.$getHtmlSync('/js/base/DefaultTemplate.html');


/**
 * This function is called by the ViewManager before the 
 * corresponding element is rendered in DOM
 */
app.base.View.prototype.prepareForDisplay = function(){
};


/**
 * 
 * @param  {Element} elementInfo [description]
 * @param  {app.base.View} viewModel   [description]
 */
app.base.View.prototype.afterRender = function(elementInfo, viewModel){
	viewModel.$element = $(elementInfo[0]);
	viewModel.prepareForDisplay();
};


app.base.View.prototype.getName = function(){
	return this.name;
};


app.base.View.prototype.getTemplate = function(){
	return this.template;
};
