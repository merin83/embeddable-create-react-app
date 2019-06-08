#!/usr/bin/env node
const inquirer = require('inquirer');
const fs = require('fs');

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
    fs.copyFile(
      'src/config/webpack.config.js',
      `${cwd}/webpack.config.js`,
      err => {
        if (err) {
          console.log(
            'Make sure you have Node version 8.5 or higher installed on your system'
          );
          throw err;
        }
        console.log('webpack.config.js successfully created');
      }
    );
  } else {
    console.log(`webpack.config.js creation failed choose 'y' to create it`);
  }
})();
