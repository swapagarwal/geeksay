const translations = {
    "address": "url",
    "anchor": "<a>",
    "alternate": "alt",
    "alternative": "alt",
    "and": "&&",
    "at": "@",
    "bang": "!",
    "binary": "01",
    "black": "#000",
    "blue": "#0000ff",
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
    "equal": "=",
    "escape": "esc",
    "everything": "42",
    "fast": "O(1)",
    "find": "ctrl+f",
    "fix": "debug",
    "forbidden": "403",
    "force": "ma",
    "forget": "ctrl+z",
    "fuck": "fork",
    "function": "fn",
    "geek": "g33k",
    "get": "git",
    "god": "root",
    "got": "git",
    "green": "#00ff00",
    "hacker": "haxor",
    "heart": "<3",
    "hello": "ping",
    "help": "f1",
    "hey": "ping",
    "hi": "ping",
    "home": "127.0.0.1",
    "house": "127.0.0.1",
    "image": "img",
    "inspect": "ctrl+shift+i",
    "kill": "ctrl+c",
    "leet": "1337",
    "life": "42",
    "lifetime": "runtime",
    "like": "<3",
    "link": "url",
    "local": "127.0.0.1",
    "localhost": "127.0.0.1",
    "love": "<3",
    "marry": "merge",
    "mathematics": "math",
    "me": "self",
    "minus": "-",
    "move": "mv",
    "name": "alias",
    "new": "ctrl+n",
    "noob": "n00b",
    "not": "!",
    "not found": "404",
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
    "propose": "commit",
    "print": "ctrl+p",
    "quit": "ctrl+q",
    "random": "rand",
    "red": "#ff0000",
    "redo": "ctrl+y",
    "refresh": "f5",
    "remove": "rm",
    "rename": "f2",
    "replace": "ctrl+r",
    "rule": "ctrl",
    "save": "ctrl+s",
    "search": "ctrl+f",
    "send" : "push",
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
    const keys = Object.keys(translations);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    return "Random Translation: " + randomKey + " -> " + translations[randomKey];
}

function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
}
