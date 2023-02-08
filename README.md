# geeksay

[![Build Status](https://travis-ci.org/swapagarwal/geeksay.svg?branch=master)](https://travis-ci.org/swapagarwal/geeksay)
[![npm version](https://img.shields.io/npm/v/geeksay)](https://www.npmjs.com/package/geeksay)
[![npm downloads](https://img.shields.io/npm/dm/geeksay)](https://www.npmjs.com/package/geeksay)
[![npm bundle size](https://img.shields.io/bundlephobia/min/geeksay)](https://www.npmjs.com/package/geeksay)
[![This project is using Percy.io for visual regression testing.](https://percy.io/static/images/percy-badge.svg)](https://percy.io/swap/geeksay)
[![open issues](https://img.shields.io/github/issues/swapagarwal/geeksay.svg)](https://github.com/swapagarwal/geeksay/issues?q=is%3Aopen+is%3Aissue)
[![closed pull requests](https://img.shields.io/github/issues-pr-closed/swapagarwal/geeksay.svg)](https://github.com/swapagarwal/geeksay/pulls?q=is%3Apr+is%3Aclosed)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg)](https://github.com/swapagarwal/geeksay/fork)

> geeks will ctrl+s the world

> There's no place like 127.0.0.1

> sometimes, i just need a `<br>`

This is a website to find geeky and cheesy phrases to send to your **Loved Ones**, and I am sure they will love em.

You know how sometimes you find these really geeky quotes and wish the world had more of them? Yeah, geeksay fixes that. Try it out at [http://geeksay.xyz](http://geeksay.xyz)

🤓 Featured on [npm weekly](https://medium.com/npm-inc/npm-weekly-221-npm-6-12-1-is-here-oss-sustainability-open-rfc-calls-more-eb6506c83311) 🤓

## Install
geeksay can be used as a module/package.
To install geeksay, run the following command in the command line:

```
npm install -g geeksay
```

## Usage
The following are examples of how you can use geeksay, but feel free to use/test your own geeky and cheesy phrases.
geeksay supports a lot more than just the phrases in the examples below, so have fun with it!

### Module
geeksay can be used as a JavaScript module.
The following is an example of loading the geeksay module and using it in your program:

```
const geeksay = require('geeksay'); // Loads the geeksay module into your program/application
console.log(geeksay(`go hard or go home`)); // Example output: go hard || go 127.0.0.1
console.log(geeksay(`please make me a sandwich`)); // Example output: sudo make me a sandwich
```

### CLI
geeksay can also be used in the CLI.

#### npm
geeksay can be used with npm. 
First, install geeksay using the npm install command and then test it out!
The following are examples of using geeksay in the command line:

```
$ npm install geeksay // See Install section
$ geeksay copy that // Example output: ctrl+c that
$ geeksay to be or not to be, that is the question // Example output: to be || ! to be, that is the question
```

> Note: **Do not** put quotes around the phrase, even if it contains spaces!

#### npx
geeksay can also be used with npx.
npx is an npm package runner that allows us to execute any JavaScript npm package without installing the package itself.
The following are examples of this:

```
$ npx geeksay i was 5 and he was 6 // Example output: i was 101 && he was 110
$ npx geeksay sometimes i just need a break // Example output: sometimes i just need a <br>
```

> Note: **Do not** put quotes around the phrase, even if it contains spaces!

## Test
The following command runs the test command as defined in the package.json file. 
You can execute this command by first cloning the repo (git clone) and then locally navigating to the repo folder on your computer.
Now you can run the command below. 

```
$ npm test
```

> Note: If you receive any errors, you might have to install mocha first.

## Demo

This is what you actually want, right? Right?? [There you go!](http://geeksay.xyz) 👏

Here is geeksay in action:

![](demo.gif)

![](save.jpg)
![](home.jpg)
![](break.jpg)