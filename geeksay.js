"use strict";

var translations = {
    "address": "url",
    "anchor": "<a>",
    "and": "&&",
    "at": "@",
    "bang": "!",
    "binary": "01",
    "black": "#000",
    "bold": "<b>",
    "break": "<br>",
    "bullshit": "dump",
    "bye": "exit",
    "call": "ping",
    "close": "ctrl+w",
    "coffee": "covfefe",
    "command": "cmd",
    "control": "ctrl",
    "copy": "ctrl+c",
    "cut": "ctrl+x",
    "delete": "del",
    "escape": "esc",
    "everybody": "255.255.255.255",
    "everyone": "255.255.255.255",
    "everything": "42",
    "fast": "O(1)",
    "find": "ctrl+f",
    "fix": "debug",
    "force": "ma",
    "forget": "ctrl+z",
    "fuck": "fork",
    "function": "fn",
    "geek": "g33k",
    "get": "git",
    "god": "root",
    "got": "git",
    "hacker": "haxor",
    "hello": "ping",
    "help": "f1",
    "hey": "ping",
    "hi": "ping",
    "home": "127.0.0.1",
    "house": "127.0.0.1",
    "image": "img",
    "kill": "ctrl+c",
    "leet": "1337",
    "life": "42",
    "lifetime": "runtime",
    "local": "127.0.0.1",
    "localhost": "127.0.0.1",
    "me": "self",
    "minus": "-",
    "name": "alias",
    "new": "ctrl+n",
    "noob": "n00b",
    "not": "!",
    "number": "#",
    "open": "ctrl+o",
    "or": "||",
    "owner": "admin",
    "paste": "ctrl+v",
    "photo": "img",
    "pic": "img",
    "picture": "img",
    "pie": "π",
    "please": "sudo",
    "plus": "+",
    "poop": "dump",
    "print": "ctrl+p",
    "quit": "ctrl+q",
    "redo": "ctrl+y",
    "refresh": "f5",
    "rename": "f2",
    "replace": "ctrl+r",
    "rule": "ctrl",
    "save": "ctrl+s",
    "search": "ctrl+f",
    "shit": "dump",
    "sleep": "shutdown",
    "slow": "O(n^n)",
    "snap": "img",
    "snapshot": "img",
    "stop": "abort",
    "undo": "ctrl+z",
    "universe": "42",
    "want": "require",
    "white": "#fff",
    "world": "0.0.0.0/0"
};

var quotes = [
    "bang bang my baby shot me down",
    "Bye World",
    "coffee is life",
    "copy that!",
    "Forget that ever happened",
    "fuck that shit",
    "geek alert",
    "geek inside",
    "get out of home",
    "go hard or go home",
    "he wore black and i wore white",
    "Hello World",
    "hi everybody",
    "Home is where ideas come to life",
    "Home is where the heart is",
    "Home is where the wifi connects automatically",
    "I am God",
    "I am the owner",
    "i need to sleep",
    "I want the world to know me",
    "i was 5 and he was 6",
    "I will call you",
    "I will find you and I will fix you!",
    "not everything is black and white",
    "please make me a sandwich",
    "to be or not to be, that is the question",
    "Today is the first day of the rest of your lifetime",
    "what's your name"
];

function isNumeric(num){
    return !Number.isNaN(parseInt(num));
}

function geeksay(text) {
    if(isNumeric(text)) {
        return (text >>> 0).toString(2);
    }
    else {
        var lowerCaseText = text.toLowerCase();
        if (translations.hasOwnProperty(lowerCaseText)) {
            return translations[lowerCaseText];
        } else {
            return text;
        }
    }
}

function getRandomTranslation() {
    var keys = Object.keys(translations);
    var randomKey = keys[Math.floor(Math.random() * keys.length)];
    return "Random Translation: " + randomKey + " -> " + translations[randomKey];
}

function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
}
