const translations = [
    { "in": "save", "out": "ctrl+s" },
    { "in": "break", "out": "<br>" },
    { "in": "control", "out": "ctrl" },
    { "in": "rule", "out": "ctrl" },
    { "in": "escape", "out": "esc" },
    { "in": "black", "out": "#000" },
    { "in": "white", "out": "#fff" },
    { "in": "bang", "out": "!" },
    { "in": "not", "out": "!" },
    { "in": "new", "out": "ctrl+n" },
    { "in": "open", "out": "ctrl+o" },
    { "in": "anchor", "out": "<a>" },
    { "in": "bold", "out": "<b>" },
    { "in": "cut", "out": "ctrl+x" },
    { "in": "copy", "out": "ctrl+c" },
    { "in": "paste", "out": "ctrl+v" },
    { "in": "quit", "out": "ctrl+q" },
    { "in": "close", "out": "ctrl+w" },
    { "in": "help", "out": "f1" },
    { "in": "rename", "out": "f2" },
    { "in": "undo", "out": "ctrl+z" },
    { "in": "redo", "out": "ctrl+y" },
    { "in": "search", "out": "ctrl+f" },
    { "in": "find", "out": "ctrl+f" },
    { "in": "replace", "out": "ctrl+r" },
    { "in": "print", "out": "ctrl+p" },
    { "in": "greet", "out": "ping" },
    { "in": "get", "out": "git" },
    { "in": "got", "out": "git" },
    { "in": "home", "out": "127.0.0.1" },
    { "in": "house", "out": "127.0.0.1" },
    { "in": "local", "out": "127.0.0.1" },
    { "in": "localhost", "out": "127.0.0.1" },
    { "in": "fuck", "out": "fork" },
    { "in": "hello", "out": "ping" },
    { "in": "hi", "out": "ping" },
    { "in": "hey", "out": "ping" },
    { "in": "command", "out": "cmd" },
    { "in": "forget", "out": "ctrl+z" },
    { "in": "world", "out": "0.0.0.0/0" },
    { "in": "want", "out": "require" },
    { "in": "need", "out": "require" },
    { "in": "name", "out": "alias" },
    { "in": "address", "out": "url" },
    { "in": "pie", "out": "π" },
    { "in": "function", "out": "fn" },
    { "in": "kill", "out": "ctrl+c" },
    { "in": "stop", "out": "abort" },
    { "in": "refresh", "out": "f5" },
    { "in": "slow", "out": "O(n^n)" },
    { "in": "fast", "out": "O(1)" },
    { "in": "leet", "out": "1337" },
    { "in": "hacker", "out": "haxor" },
    { "in": "geek", "out": "g33k" },
    { "in": "plus", "out": "+" },
    { "in": "minus", "out": "-" },
    { "in": "and", "out": "&&" },
    { "in": "or", "out": "||" },
    { "in": "binary", "out": "01" },
    { "in": "call", "out": "ping" },
    { "in": "me", "out": "self" },
    { "in": "owner", "out": "admin" },
    { "in": "god", "out": "root" },
    { "in": "please", "out": "sudo" },
    { "in": "at", "out": "@" },
    { "in": "fix", "out": "debug" },
    { "in": "shit", "out": "dump" },
    { "in": "bullshit", "out": "dump" },
    { "in": "poop", "out": "dump" },
    { "in": "delete", "out": "del" },
    { "in": "force", "out": "ma" },
    { "in": "coffee", "out": "covfefe" },
    { "in": "number", "out": "#" },
    { "in": "image", "out": "img" },
    { "in": "photo", "out": "img" },
    { "in": "pic", "out": "img" },
    { "in": "picture", "out": "img" },
    { "in": "snap", "out": "img" },
    { "in": "snapshot", "out": "img" },
    { "in": "bye", "out": "exit" },
    { "in": "noob", "out": "n00b" },
    { "in": "life", "out": "42" },
    { "in": "universe", "out": "42" },
    { "in": "everything", "out": "42" },
    { "in": "lifetime", "out": "runtime" },
    { "in": "sleep", "out": "shutdown" },
    { "in": "red", "out": "#ff0000" },
    { "in": "green", "out": "#00ff00" },
    { "in": "blue", "out": "#0000ff" },
    { "in": "marry", "out": "merge" },
    { "in": "propose", "out": "commit" },
    { "in": "not found", "out": "404" },
    { "in": "link", "out": "url" },
    { "in": "forbidden", "out": "403" },
    { "in": "send", "out": "push" },
    { "in": "alternate", "out": "alt" },
    { "in": "alternative", "out": "alt" },
    { "in": "inspect", "out": "ctrl+shift+i" },
    { "in": "equal", "out": "=" },
    { "in": "remove", "out": "rm" },
    { "in": "move", "out": "mv" },
    { "in": "random", "out": "rand" },
    { "in": "mathematics", "out": "math" },
    { "in": "heart", "out": "<3" },
    { "in": "love", "out": "<3" },
    { "in": "list", "out": "ls" },
    { "in": "ok", "out": "200" },
    { "in": "okay", "out": "200" },
    { "in": "question", "out": "?" },
    { "in": "history", "out": "log" },
    { "in": "on", "out": "1" },
    { "in": "off", "out": "0" },
    { "in": "pixel", "out": "px" },
    { "in": "say", "out": "log" },
    { "in": "body", "out": "<body>" },
    { "in": "head", "out": "<head>" },
    { "in": "restart", "out": "ctrl+alt+del" },
    { "in": "death", "out": "BSOD" },
    { "in": "wait", "out": "load" },
    { "in": "waiting", "out": "loading" },
    { "in": "unauthorized", "out": "401" }
];

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
];

function isNumeric(num) {
    return !isNaN(parseInt(num));
}

function geeksay(text) {
    const input = Array.isArray(text) ? text : String(text).split(' ');

    return input.map(geeksayWord).join(' ');
}

function geeksayWord(text) {
    if (isNumeric(text)) {
        return (text >>> 0).toString(2);
    }

    const matchingTransaltions = translations.filter( translation => (translation.in === text.toLowerCase()) );

    return (matchingTransaltions.length > 0)
        ? matchingTransaltions.pop().out
        : { in: text, out: text }.out;
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
module.exports.translations = translations;
module.exports.quotes = quotes;
