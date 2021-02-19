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

You know how sometimes you find these really geeky quotes and wish the world had more of them? Yeah, geeksay fixes that. Try it out at [http://geeksay.xyz](http://geeksay.xyz)

🤓 Featured on [npm weekly](https://medium.com/npm-inc/npm-weekly-221-npm-6-12-1-is-here-oss-sustainability-open-rfc-calls-more-eb6506c83311) 🤓

## Install

```
npm install -g geeksay
```

## Usage

### Module

```
const geeksay = require('geeksay');
console.log(geeksay(`go hard or go home`)); // go hard || go 127.0.0.1
console.log(geeksay(`please make me a sandwich`)); // sudo make me a sandwich
```

### CLI

```
$ npm install geeksay
$ geeksay copy that // ctrl+c that
$ geeksay to be or not to be, that is the question // to be || ! to be, that is the question
```

> Note: **Do not** put quotes around the phrase, even if it contains spaces!

### npx

```
$ npx geeksay i was 5 and he was 6 // i was 101 && he was 110
$ npx geeksay sometimes i just need a break // sometimes i just need a <br>
```

## Test
```
$ npm test
```

## Demo

This is what you actually want, right? Right?? [There you go!](http://geeksay.xyz) 👏

![](demo.gif)

![](save.jpg)
![](home.jpg)
![](break.jpg)
