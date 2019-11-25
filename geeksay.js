const translations = {
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
    "find": "ctrl+f",
    "replace": "ctrl+r",
    "print": "ctrl+p",
    "greet": "ping",
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
    "need": "require",
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
    "sleep": "shutdown",
    "red": "#ff0000",
    "green": "#00ff00",
    "blue": "#0000ff",
    "marry": "merge",
    "propose": "commit",
    "not found": "404",
    "link": "url",
    "forbidden": "403",
    "send": "push",
    "alternate": "alt",
    "alternative": "alt",
    "inspect": "ctrl+shift+i",
    "equal": "=",
    "remove": "rm",
    "move": "mv",
    "random": "rand",
    "mathematics": "math",
    "heart": "<3",
    "love": "<3",
    "smile": ":)",
    "list": "ls",
    "ok": "200",
    "okay": "200",
    "question": "?",
    "history": "log",
    "on": "1",
    "off": "0",
    "pixel": "px",
    "say": "log",
    "body": "<body>",
    "head": "<head>",
    "restart": "ctrl+alt+del",
    "death": "BSOD",
    "wait": "load",
    "waiting": "loading",
    "forbidden": "403",
    "unauthorized": "401",
    "nothing": "void",
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
    "I need help", // I require f1
    "geek alert", // g33k alert
    "geek inside", // g33k inside
    "copy that!", // ctrl+c that!
    "get out of home", // git out of 127.0.0.1
    "not everything is black and white", // ! 42 is #000 && #fff
    "to be or not to be, that is the question", // to be || ! to be, that is the ?
    "i was 5 and he was 6", // i was 101 && he was 110
    "he wore black and i wore white", // he wore #000 && i wore #fff
    "bang bang my baby shot me down", // ! ! my baby shot self down
    "Today is the first day of the rest of your lifetime", // Today is the first day of the rest of your runtime
    "i need to sleep", // i require to shutdown
    "There are ten types of people in the world: those who understand binary and those who don't", // There are ten types of people in the world: those who understand 01 && those who don't
    "I love my life", // I <3 my 42
    "I love my house", // I <3 my 127.0.0.1
    "heart break", // <3 <br>
    "I like to fix shit", // I like to debug dump
    "eat sleep code repeat", // eat shutdown code repeat
    "roses are red, violets are blue", // roses are ##ff0000, violets are ##0000ff
    "The greatest trick the devil ever pulled was convincing the world he didn't exist", // The greatest trick the devil ever pulled was convincing the 0.0.0.0/0 he didn't exist 
    "home sweet home", // 127.0.0.1 sweet 127.0.0.1
    "history repeats itself", // log repeats itself
    "My dog likes to greet me at the door.", // My dog likes to ping me at the door.
    "keep calm and geek on", // keep calm && g33k 1
    "somebody save me", // somebody ctrl+s me
    "Easy as pie", // easy as π
    "Live, laugh, love", // live, laugh, <3
    "Green with envy", // #00ff00 with envy
    "live and learn", // live && learn
]

function isNumeric(num) {
    return !isNaN(parseInt(num));
}

function geeksay(text) {
    const input = Array.isArray(text) ? text : String(text).split(' ');
    return input.map(geeksayWord).join(' ');
}

function geeksayWord(word) {
    if (isNumeric(word)) {
        return (word >>> 0).toString(2);
    }
    else {
        lowerCaseText = removeSymbols(word).toLowerCase();
        if (translations.hasOwnProperty(lowerCaseText)) {
            word = word.toLowerCase().replace(lowerCaseText, translations[lowerCaseText]);
        }
        return word;
    }
}

function removeSymbols(word) {
    return word.replace(/(?!\n|\r\n)[^a-zA-Z0-9]+/, '');
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
