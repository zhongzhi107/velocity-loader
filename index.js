var loaderUtils = require('loader-utils');

module.exports = function(source) {
	this.cacheable && this.cacheable();
	var Engine = require('velocity').Engine;
	var engine = new Engine({template: source});
	var result = engine.render({});

	// TODO 支持模版变量替换
	// return [
	// 	// 'var Engine = require(\'velocity\');',
	// 	'var Engine = require(\'' + loaderUtils.stringifyRequest(this, require.resolve('velocity')) + '\').Engine;',
	// 	// 'var Engine = require(' + JSON.stringify(require.resolve('velocity')) + ').Engine;',
	// 	// 'var engine = new Engine({template: ' + JSON.stringify(source) + '});',
	// 	//'module.exports = engine.render;'
	// 	'module.exports = function(context) {return "engine.render(context)";};'
	// ].join('\n');

	return 'module.exports = function(context) {return ' + JSON.stringify(result) + ';};';


}
