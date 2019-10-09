const translations = {
    // keyboard shortcuts
    "rule": "ctrl",
    "control": "ctrl",
    "kill": "ctrl+c",
    "cut": "ctrl+x",
    "copy": "ctrl+c",
    "paste": "ctrl+v",
    "quit": "ctrl+q",
    "close": "ctrl+w",
    "new": "ctrl+n",
    "open": "ctrl+o",
    "save": "ctrl+s",
    "undo": "ctrl+z",
    "forget": "ctrl+z",
    "redo": "ctrl+y",
    "search": "ctrl+f",
    "find": "ctrl+f",
    "replace": "ctrl+r",
    "print": "ctrl+p",
    "inspect": "ctrl+shift+i",

    // symbols names
    "bang": "!",
    "not": "!",
    "at": "@",

    // single keys
    "escape": "esc",
    "delete": "del",
    "help": "f1",
    "rename": "f2",
    "refresh": "f5",
    "command": "cmd",
    "alternate": "alt",
    "alternative": "alt",
    "function": "fn",

    // colours
    "black": "#000",
    "white": "#fff",
    "red": "#ff0000",
    "green": "#00ff00",
    "blue": "#0000ff",
    "lime": "#bada55",
    "badass": "#bada55",

    // html & http
    "not found": "404",
    "forbidden": "403",
    "anchor": "<a>",
    "bold": "<b>",
    "break": "<br>",
    "image": "<img>",
    "photo": "<img>",
    "pic": "<img>",
    "picture": "<img>",
    "snap": "<img>",
    "snapshot": "<img>",

    // git
    "get": "git",
    "got": "git",
    "send" : "push",
    "fuck": "fork",
    "marry": "merge",
    "propose": "commit",

    // networking
    "home": "127.0.0.1",
    "house": "127.0.0.1",
    "local": "127.0.0.1",
    "localhost": "127.0.0.1",
    "world": "0.0.0.0/0",
    "hello": "ping",
    "hi": "ping",
    "hey": "ping",
    "call": "ping",

    // dev
    "fix": "debug",
    "want": "require",
    "plus": "+",
    "minus": "-",
    "equal": "=",
    "and": "&&",
    "or": "||",

    // geek lingo
    "stop": "abort",
    "address": "url",
    "link": "url",
    "leet": "1337",
    "hacker": "haxor",
    "geek": "g33k",
    "noob": "n00b",

    // geek references
    "life": "42",
    "universe": "42",
    "everything": "42",

    // sysadmin
    "me": "self",
    "owner": "admin",
    "god": "root",
    "please": "sudo",
    "bye": "exit",
    "name": "alias",
    "lifetime": "runtime",
    "sleep": "shutdown",
    "shit": "dump",
    "bullshit": "dump",
    "poop": "dump",

    // cli
    "force": "ma",
    "remove": "rm",
    "move": "mv",
    "random": "rand",
    "mix": "shuf",

    // maths
    "pie": "π",
    "slow": "O(n^n)",
    "fast": "O(1)",
    "binary": "01",

    // miscellaneous
    "coffee": "covfefe",
    "number": "#",
    "mathematics": "math",
    "heart": "<3",
    "love": "<3",
    "like": "<3",
}

const quotes = [
    "Hello World", // ping 0.0.0.0/0
    "Bye World", // exit 0.0.0.0/0
    "Forget that ever happened", // ctrl+z that ever happened
    "Home is where the heart is", // 127.0.0.1 is where the heart is
    "Home is where ideas come to life", // 127.0.0.1 is where ideas come to 42
    "Home is where the wifi connects automatically", // 127.0.0.1 is where the wifi connects automatically
    "fuck that shit", // fork that dump
    "go hard or go home", // go hard || go 127.0.0.1
    "I will call you", // I will ping you
    "I want the world to know me", // I require the 0.0.0.0/0 to know self
    "I am the owner", // I am the admin
    "I am God", // I am root
    "please make me a sandwich", // sudo make self a sandwich
    "coffee is life", // covfefe is 42
    "what's your name", // what's your alias
    "I will find you and I will fix you!", // I will ctrl+f you && I will debug you!
    "geek alert", // g33k alert
    "geek inside", // g33k inside
    "copy that!", // ctrl+c that!
    "get out of home", // git out of 127.0.0.1
    "not everything is black and white", // ! 42 is #000 && #fff
    "to be or not to be, that is the question", // to be || ! to be, that is the question
    "i was 5 and he was 6", // i was 101 && he was 110
    "he wore black and i wore white", // he wore #000 && i wore #fff
    "bang bang my baby shot me down", // ! ! my baby shot self down
    "Today is the first day of the rest of your lifetime", // Today is the first day of the rest of your runtime
    "i need to sleep", // i need to shutdown
    "There are ten types of people in the world: those who understand binary and those who don't", // There are ten types of people in the world: those who understand 01 && those who don't
    "I love my life", // I <3 my 42
    "I love my house", // I <3 my 127.0.0.1
    "heart break", // <3 <br>
    "I like to fix shit", // I <3 to debug dump
    "eat sleep code repeat", // eat shutdown code repeat
    "roses are red, violets are blue", // roses are ##ff0000, violets are ##0000ff
    "The greatest trick the devil ever pulled was convincing the world he didn't exist", // The greatest trick the devil ever pulled was convincing the 0.0.0.0/0 he didn't exist 
    "home sweet home", // 127.0.0.1 sweet 127.0.0.1
]

function isNumeric(num){
    return !isNaN(parseInt(num));
}

function geeksay(text) {
    const input =  Array.isArray(text) ? text : String(text).split(' ');

    return input.map(geeksayWord).join(' ');
}

function geeksayWord(text) {
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
    const keys = Object.keys(translations);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    return "Random Translation: " + randomKey + " -> " + translations[randomKey];
}

function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
}

module.exports = geeksay;
