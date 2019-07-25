#!/usr/bin/env node
const inquirer = require('inquirer');
const fs = require('fs');

const webpackConfig = `
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
`;

(async () => {
  const { option } = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'option',
      message: 'Get the webpack.config.js file',
      default: false,
    },
  ]);
  if (option) {
    const cwd = process.cwd();
    fs.writeFileSync(`${cwd}/webpack.config.js`, webpackConfig);
    console.log('webpack.config.js successfully created');
  } else {
    console.log(`webpack.config.js creation failed choose 'y' to create it`);
  }
})();
