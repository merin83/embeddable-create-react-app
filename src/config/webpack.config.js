const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const glob = require('glob');

module.exports = {
  entry: {
    'bundle.js': glob
      .sync('build/static/?(js|css|media)/*.?(js|css|png|woff|woff2|eot|ttf|svg)')
      .map(f => path.resolve(__dirname, f)),
  },
  output: {
    filename: 'build/static/js/bundle.min.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, use: ['url-loader?limit=100000'] }
    ],
  },
  plugins: [new UglifyJsPlugin()],
};
