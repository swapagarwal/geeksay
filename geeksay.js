var keywords = {
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
    "home": "127.0.0.1"
}

function geeksay(text) {
    lowerCaseText = text.toLowerCase();
    if (keywords.hasOwnProperty(lowerCaseText)) {
        return keywords[lowerCaseText];
    } else {
        return text;
    }
}
