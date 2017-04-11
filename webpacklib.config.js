/* global __dirname, require, module */

const webpack = require('webpack');
const path = require('path');
const env = require('yargs').argv.env; // use --env with webpack 2

const libraryName = 'reactTippy';
const outputFile = 'react-tippy.js';
const plugins = [];

if (env === 'build') {
  // plugins.push(new UglifyJsPlugin({ minimize: true }));
  // plugins.push(new LodashModuleReplacementPlugin({
  //   collections: true,
  //   paths: true,
  // }));
}

const config = {
  entry: __dirname + '/src/Tooltip/index.js',
  devtool: 'source-map',
  output: {
    path: __dirname + '/dist',
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel-loader',
        options: {
          presets: ['es2015', 'react'],
          plugins: ['transform-object-rest-spread']
        },
        exclude: /(node_modules|bower_components)/,
      },
    ],
  },
  resolve: {
    modules: [
      path.resolve('./node_modules'),
    ],
    extensions: ['.json', '.js'],
  },
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
      umd: 'react',
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom',
      umd: 'react-dom',
    },
    'popper.js': {
      root: 'Popper',
      commonjs2: 'popper.js',
      commonjs: 'popper.js',
      amd: 'popper.js',
      umd: 'popper.js',
    },
  },
  plugins: plugins,
};

module.exports = config;
