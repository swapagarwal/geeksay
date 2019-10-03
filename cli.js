#!/usr/bin/env node

var module = require("./geeksay");

const [,, ...words] = process.argv;

var translation = [];

for (var i = 0; i < words.length; i++) {
  translation.push(module.geeksay(words[i]));
}

console.log(translation.join(' '));
