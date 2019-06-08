<div align="center">
<h1>embeddable-create-react-app 🔀</h1>

Quickly generate a `webpack.config.js` file to create an embeddable react widget or CDN friendly script build.min.js without ejecting create-react-app

</div>

<hr />

[![npm][npm-image]][npm-url]
[![downloads][downloads-image]][downloads-url]
[![MIT License][license-badge]][LICENSE]
[![node-version][node-version-badge]][node]
[![version][version-badge]][package]

[npm]: https://www.npmjs.com/
[node]: https://nodejs.org
[package]: https://www.npmjs.com/package/embeddable-create-react-app
[node-version-badge]: https://img.shields.io/badge/node-%3E%3D%204.0-orange.svg?style=flat-square
[version-badge]: https://img.shields.io/npm/v/cross-env.svg?style=flat-square
[npm-image]: https://img.shields.io/npm/v/embeddable-create-react-app.svg
[npm-url]: https://www.npmjs.com/package/embeddable-create-react-app
[downloads-image]: https://img.shields.io/npm/dm/embeddable-create-react-app.svg
[downloads-url]: https://www.npmjs.com/package/embeddable-create-react-app
[license-badge]: https://img.shields.io/npm/l/embeddable-create-react-app.svg?style=flat-square
[license]: https://github.com/merin83/embeddable-create-react-app/blob/master/LICENSE

## The Problem
The current Create React App supports Code Splitting which means if you run npm build on your create react app you will find that it has generated a build folder with chunk files. Meaning there is no single bundle.min.js file for your app. Code Splitting is very good for performance but sometimes you just need a `single bundle.min.js` file for your `small` app so that you can easily `embed` or make a CDN version of your app. **NB: I said small here because you don't want to make a single bundle.min.js file for a large app because it will create a huge size js file and can make your application slow.**

## The Solution
There are several solution for the end goal that is you want to use a single build script of one of your react app to another react app or you just want to use the build script to another website. If you Eject the create-react-app or use webpack to build your react app you can customize your webpack config to generate a build script. But in this section we will discuss about the ones whom are using create-react-app. Because, Most of us now a days simply just uses CRA to build any kind of react applications and also at the beginning stage of the application it's rarely a requirement that you may have to consider a single build script. The problem arise after you complete the app or you need to use an old app within the new app. So the situation is kind of like that is you don't want to eject your CRA app also you want a single build script. That's when you will need this solution `embeddable-create-react-app`. **Basically what it does is, it generate a `webpack.config.js` within your app and then using CRA generated build folder it creates a build.min.js file for you.**


## Installation

```
npx embeddable-create-react-app
```

## Usage

i) copy the below code and paste it into your package.json file's script section,
```
"web:build": "npm run build && npm run build:bundle",
"build:bundle": "webpack --config webpack.config.js",
```
ii) `Run yarn web:build`


That's it, check a dist folder has been created and the build.min.js file can be found into `dist/build/static/js` directory

NB: you may have to install `uglifyjs-webpack-plugin` and `webpack-cli` at step (ii) to avoid any module not found issue.

## Inspiration

I originally created this to solve a problem, I was having to create a single build script using CRA for making a React Widget. I came to know about this solution while looking at one of the [closed issue](https://github.com/facebook/create-react-app/issues/3365) in CRA.

## Other Solution
Whn you build the script using this solution if your app is big you will see the webpack warning that the js file crossed the standard file size limit (Of course it cross the size limit in most of the occasion because it's making an script using everything your vendor, app code, style etc into a single script). If you can afford a minimum js size file then it's ok otherwise, if your app is big any you are not allowed to have a big build script then you can follow the below solution,

### Using CDN
This can be your best bet, basically what it will do is take your regular CRA build folder with code splitting chunks and host it for you. And from that hosts you can generate a cdn scripts. For Example: You can host a regular CRA app to AWS S3 and then you can create a CDN with CloudFront, you can check this article for further information, https://medium.com/ovrsea/deliver-your-react-app-in-milliseconds-with-cloudfront-fd3a2d038445


### Using webpack config override
if you don't want to use a webpack.config.json in your CRA app. There are several library that lets you override the webpack configuration. you can use any of them to override the webpack configuration of our CRA and turn of the Code Splitting.

### Using embeddable-react-widget
This a customized solution that uses webpack to build the react app for you. If you are not using CRA then [embeddable-react-widget](https://github.com/seriousben/embeddable-react-widget) can be helpful for you.
