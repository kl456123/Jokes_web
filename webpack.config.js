var path = require('path');
var webpack = require('webpack');
var srcPath = path.join(__dirname, 'front');
module.exports = {
  devtool: 'eval-source-map',
  entry: {
    app: ['webpack-dev-server/client?http://localhost:3001',
      'webpack/hot/only-dev-server',
      './front/app'
    ],
    vendor: ['react', 'react-dom', 'alt'],
  },
  output: {
    path: path.join(__dirname, 'public/js'),
    filename: 'bundle.js',
    publicPath: '/js/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin( /* chunkName= */ "vendor", /* filename= */ "vendor.bundle.js")
  ],
  resolve: {
    root: srcPath,
    extensions: ['', '.js', '.jsx', '.css'],
    modulesDirectories: ['node_modules', 'front', '/pulic/css'],
    fallback: path.join(__dirname, "node_modules")
  },
  module: {
    loaders: [{
      test: /\.jsx$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, 'front')
    }, {
      test: /\.css$/,
      loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
    }],
    // preLoaders: [{
    //   test: /\.jsx?$/,
    //   include: srcPath,
    //   loader: 'jshint-loader'
    // }]
  },
};