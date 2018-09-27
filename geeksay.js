var translations = {
    "save": "ctrl+s",
    "break": "<br>",
    "control": "ctrl",
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
    "get": "git",
    "got": "git",
    "home": "127.0.0.1",
    "house": "127.0.0.1",
    "local": "127.0.0.1",
    "localhost": "127.0.0.1",
    "fuck": "fork",
    "hello": "ping",
    "hi": "ping",
    "command": "cmd",
    "forget": "ctrl+z",
    "world": "0.0.0.0/0",
    "need": "require",
    "want": "require",
    "name": "alias",
    "address": "url",
    "five": "5",
    "six": "6",
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
    "shit": "dump"
}

function isNumeric(num){
    return !isNaN(num)
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
