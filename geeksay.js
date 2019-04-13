var translations = {
    "save": "ctrl+s",
    "break": "<br>",
    "control": "ctrl",
    "rule": "ctrl",
    "escape": "esc",
    "black": "#000",
    "white": "#fff",
    "bang": "!",
    "not": "!",
    "new": "ctrl+n",
    "open": "ctrl+o",
    "anchor": "<a>",
    "bold": "<b>",
    "cut": "ctrl+x",
    "copy": "ctrl+c",
    "paste": "ctrl+v",
    "quit": "ctrl+q",
    "close": "ctrl+w",
    "help": "f1",
    "rename": "f2",
    "undo": "ctrl+z",
    "redo": "ctrl+y",
    "search": "ctrl+f",
    "replace": "ctrl+r",
    "print": "ctrl+p",
    "get": "git",
    "got": "git",
    "home": "127.0.0.1",
    "house": "127.0.0.1",
    "local": "127.0.0.1",
    "localhost": "127.0.0.1",
    "fuck": "fork",
    "hello": "ping",
    "hi": "ping",
    "hey": "ping",
    "command": "cmd",
    "forget": "ctrl+z",
    "world": "0.0.0.0/0",
    "want": "require",
    "name": "alias",
    "address": "url",
    "pie": "π",
    "function": "fn",
    "kill": "ctrl+c",
    "stop": "abort",
    "refresh": "f5",
    "slow": "O(n^n)",
    "fast": "O(1)",
    "leet": "1337",
    "hacker": "haxor",
    "geek": "g33k",
    "plus": "+",
    "minus": "-",
    "and": "&&",
    "or": "||",
    "binary": "01",
    "call": "ping",
    "me": "self",
    "owner": "admin",
    "god": "root",
    "please": "sudo",
    "at": "@",
    "fix": "debug",
    "shit": "dump",
    "bullshit": "dump",
    "poop": "dump",
    "delete": "del",
    "force": "ma",
    "coffee": "covfefe",
    "number": "#",
    "image": "img",
    "photo": "img",
    "pic": "img",
    "picture": "img",
    "snap": "img",
    "snapshot": "img",
    "bye": "exit",
    "noob": "n00b",
    "life": "42",
    "universe": "42",
    "everything": "42",
    "lifetime": "runtime",
    "sleep": "shutdown"
}

var quotes = [
    "Hello World",
    "Bye World",
    "Forget that ever happened",
    "Home is where the heart is",
    "Home is where ideas come to life",
    "Home is where the wifi connects automatically",
    "fuck that shit",
    "go hard or go home",
    "I will call you",
    "I want the world to know me",
    "I am the owner",
    "I am God",
    "please make me a sandwich",
    "coffee is life",
    "what's your name",
    "I will find you and I will fix you!",
    "geek alert",
    "geek inside",
    "copy that!",
    "get out of home",
    "not everything is black and white",
    "to be or not to be, that is the question",
    "i was 5 and he was 6",
    "he wore black and i wore white",
    "bang bang my baby shot me down",
    "Today is the first day of the rest of your lifetime",
    "i need to sleep"
]

function isNumeric(num){
    return !isNaN(parseInt(num));
}

function geeksay(text) {
    if(isNumeric(text)) {
        return (text >>> 0).toString(2);
    }
    else {
        lowerCaseText = text.toLowerCase();
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
