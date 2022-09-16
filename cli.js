#!/usr/bin/env node

const geeksay = require("./geeksay");

const [,, ...words] = process.argv;

const translation =  geeksay(words)

console.log(translation);
