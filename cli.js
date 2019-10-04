#!/usr/bin/env node

const geeksay = require("./geeksay");

const [,, ...words] = process.argv;

const translation = words.map(w => geeksay(w));

console.log(translation.join(' '));
