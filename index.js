var _ = require('lodash');
function beforeHtmlPlugin(options) {
  // Configure your plugin with options...
  this.options = _.extend({
      css: true
  }, options);
}

beforeHtmlPlugin.prototype.apply = function(compiler) {
 var self = this
  compiler.plugin('compilation', function(compilation) {
    compilation.plugin('html-webpack-plugin-before-html-processing', function(htmlPluginData, callback) {
      if (!self.options.css) {
         // 不注入css
          htmlPluginData.assets.css = []
      }
      callback(null, htmlPluginData);
    });
  });

};

module.exports = beforeHtmlPlugin;
