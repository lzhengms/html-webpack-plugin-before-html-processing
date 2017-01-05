HTML Webpack Plugin
===================

Installation
------------
Install the plugin with npm:
```shell
$ npm html-webpack-beforehtml-plugin --save-dev
```


Usage:

```
Then in `webpack.config.js`

```javascript
plugins: [
   // css: false标识不注入提取的css
  new beforeHtmlPlugin({css: false})
]
```

Note that the callback must be passed the htmlPluginData in order to pass this onto any other plugins listening on the same `html-webpack-plugin-before-html-processing` event.


# License

This project is licensed under [MIT](https://github.com/ampedandwired/html-webpack-plugin/blob/master/LICENSE).
