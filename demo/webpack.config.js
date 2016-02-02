/**
 * webpack.config.js
 *
 * @type {String}
 */
var PWD = __dirname;

var libPath = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-hot-middleware/client',
    libPath.join(PWD, 'client', 'index.js') // 入口文件配置，webpack会通过入口文件中加载的文件，全部进行打包
  ],
  output: {
    path: libPath.join(PWD, 'client', 'public', 'js'),
    filename: 'bundle.js',
    publicPath: '/static/' // 设置此参数后，bundle.js仅存在与服务器内存中，不会实际输出到public/js中
  },
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['babel'], include: libPath.join(PWD, 'client') } // 使用babel解析js
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      '__DEVTOOLS__': true,
      'process.env': JSON.stringify('development')
    })
  ]
  //externals: {
  //  react: 'React'  // 当遇到require('react')时，不会处理并默认为全局的React变量，我们需要在index.html单独使用src去加载react的js
  //}
};
