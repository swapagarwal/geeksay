  const translations = {
  // HTTP status codes
  "not found": "404",
  bad: "400",
  error: "404",
  forbidden: "403!",
  gone: "410",
  missing: "404!",
  moved: "301",
  notfound: "404!",
  ok: "200",
  okay: "200",
  overloaded: "502!",
  teapot: "418",
  timeout: "408!",
  unauthorized: "401",
  unavailable: "503!",

  // HTTP status codes
  anchor: "<a>",
  body: "<body>",
  bold: "<b>",
  break: "<br>",
  form: "<form>",
  head: "<head>",
  input: "<input>",
  select: "<select>",
  table: "<table>",
  title: "<title>",
  top: "</head>",

  // IP addresses
  bed: "127.0.0.1",
  home: "127.0.0.1",
  house: "127.0.0.1",
  local: "127.0.0.1",
  localhost: "127.0.0.1",
  world: "0.0.0.0/0",

  // HEX colour codes
  black: "#000",
  blue: "#0000ff",
  gray: "#ccc",
  green: "#00ff00",
  grey: "#ccc",
  pink: "#ffc0cb",
  red: "#ff0000",
  white: "#fff",

  // Keyboard shortcuts
  alternate: "alt",
  alternative: "alt",
  change: "alt",
  close: "ctrl+w",
  control: "ctrl",
  copy: "ctrl+c",
  cut: "ctrl+x",
  delete: "del",
  escape: "esc",
  find: "ctrl+f",
  forget: "ctrl+z",
  future: "ctrl+y",
  help: "f1",
  inspect: "ctrl+shift+i",
  kill: "alt+f4",
  leave: "alt+f4",
  new: "ctrl+n",
  open: "ctrl+o",
  past: "ctrl+z",
  paste: "ctrl+v",
  print: "ctrl+p",
  quit: "ctrl+q",
  redo: "ctrl+y",
  refresh: "f5",
  rename: "f2",
  replace: "ctrl+r",
  restart: "ctrl+alt+del",
  rule: "ctrl",
  run: "ctrl+F5",
  save: "ctrl+s",
  screenshot: "start+prt sc",
  search: "ctrl+f",
  switch: "alt+tab",
  undo: "ctrl+z",

  // CLI tools
  bye: "exit",
  call: "ping",
  command: "cmd",
  greet: "ping",
  heartbeat: "ping",
  hello: "ping",
  hey: "ping",
  hi: "ping",
  list: "ls",
  move: "mv",
  please: "sudo",
  remove: "rm",
  sleep: "shutdown",

  // Git commands
  get: "git",
  got: "git",
  history: "log",
  marry: "merge",
  propose: "commit",
  repository: "repo",
  send: "push",
  fuck: "fork",

  // Generic programming
  all: "*",
  and: "&&",
  at: "@",
  bang: "!",
  comment: "//comment",
  full: "overload",
  function: "fn",
  lifetime: "runtime",
  me: "self",
  modulo: "%",
  need: "require",
  not: "!",
  nothing: "void",
  off: "0",
  on: "1",
  or: "||",
  random: "rand",
  repeat: "loop",
  say: "log",
  space: "' '",
  stop: "abort",
  wait: "load",
  want: "require",

  // Maths and numbers
  boobs: "80085",
  divide: "/",
  equal: "=",
  everything: "42",
  fast: "O(1)",
  into: "*",
  leet: "1337",
  life: "42",
  lineartime: "o(N)",
  mathematics: "math",
  minus: "-",
  number: "#",
  pie: "π",
  plus: "+",
  slow: "O(n^n)",
  universe: "42",

  // Miscellaneous
  address: "url",
  binary: "01",
  bullshit: "dump",
  calling: "recursion",
  catastrophic: "hidenbug",
  clueless: "Jimmy",
  coffee: "covfefe",
  correct: "legit",
  death: "BSOD",
  developer: "dev",
  different: "nested",
  disapperar: "heisenbug",
  emotion: "emoticon",
  fix: "debug",
  force: "ma",
  geek: "g33k",
  god: "root",
  hacker: "haxor",
  happy: ":)",
  heart: "SMPS",
  hidden: "incognito",
  hide: "incognito",
  image: "img",
  imaginary: "Unicorny",
  information: "info",
  link: "url",
  love: "<3",
  mind: "database",
  mistake: "ERROR",
  name: "alias",
  noob: "n00b",
  owner: "admin",
  photo: "img",
  pic: "img",
  picture: "img",
  pixel: "px",
  poop: "dump",
  question: "?",
  sad: ":(",
  semicolon: ";",
  shit: "dump",
  smile: ":)",
  snap: "img",
  snapshot: "img",
  style: "css",
  useless: "reality 101 faliure",
  waiting: "loading",
};

const translationsMap = new Map(Object.entries(translations));

const quotes = [
  "Everything is under control", // Everything is under ctrl
  "Give me a break", // Give me a <br>
  "Hello World", // ping 0.0.0.0/0
  "Bye World", // exit 0.0.0.0/0
  "Forget that ever happened", // ctrl+z that ever happened
  "Home is where the heart is", // 127.0.0.1 is where the SMPS is
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
  "heart break", // SMPS <br>
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
  "There's no place like home", //There's no place like 127.0.0.1
  "Green with envy", // #00ff00 with envy
  "Once in a blue moon", //Once in a #0000ff moon
  "Hello All", // Hello *
  "It is lineartime", // It is o(N)
  "you yourself are the anchor of your life", //you yourself are the <a> of your life
  "you are the love of my life", //you are the <3 of my 42
  "pink panther", //  #ffc0cb panther
  "Get busy living or get busy dying", // git busy living || git busy dying
  "out of the blue", // out of the #0000ff
  "caught red-handed", // caught #ff0000 handed
  "I love you", //I <3 you
  "He has a style", //He has a css
  "hide it!", //incognito it!
  "99 little bugs in the code. 99 little bugs in the code. Take one down, patch it around. 127 little bugs in the code", //cb - so many bugs
  "Hey Google! Find me the best repo.", //ping Google! ctrl+f self the best repo
  "I need to restart my life", // I require to ctrl+alt+del my 42
  "Paste my Code", // ctrl+v my Code
  "Paste my Copy", // ctrl+v my ctrl+c
  "What's new?", // What's ctrl+n
  "You're done coding! Go to sleep.", // You're done coding! Go to shutdown
  "Life is a big question that even Google can't find answer.", //42 is a big ? that even Google can't ctrl+f answer
  "Have no friends not equal to yourself.", // Have no friends ! = to yourself
  "The past does not equal the future.", //The past does ! = the future
  "I just switch tabs, not the love ones", // I just alt+tab tabs, not the <3 ones
  "I have not failed. I’ve just found 10,000 ways that won’t work", // I have ! failed. I’ve just found 0 ways that won’t work
  "Life is a big question that even Google can't find answer.", //42 is a big ? that even Google can't ctrl+f answer
  "Have no friends not equal to yourself.", // Have no friends ! = to yourself
  "The past does not equal the future.", //The past does ! = the future
  "I just switch tabs, not the love ones", // I just alt+tab tabs, not the <3 ones
  "to be or not to be", // 2b || !2b
  "programming joke", // My </code>
  "home sweet home", // 127.0.0.1 sweet 127.0.0.1
  "politics is bullshit", //politics is dump
  "I want the address of my love", // I want the url of my <3
  "Never get to bed mad, stay up and snap", // Never git to 127.0.0.1 mad,stay up && img
  "Heart is missing", //SMPS is 404!
  "Information is lost from the deleted repository", //Info is lost from the del repo
  "Be different", // Be !=
  "Don't leave blank space in your code!", // Don't alt+f4 blank ' ' in your code!
  "Sometimes it's okay to run", // Sometimes it's okay to ctrl+F5
  "Divide and conquer", // / and conquer
  "It's nice to find love, propose, send gifts, marry and live happy life", // It's nice to ctrl+f <3, commit, push gifts, merge && live :) 42
  "Thou shall not pass", // Thou shall ! pass
];

function isNumeric(num) {
  return !isNaN(parseInt(num));
}

function geeksay(text) {
  const input = Array.isArray(text) ? text : String(text).split(" ");
  return input.map(geeksayPhrase).join(" ");
}

function geeksayPhrase(word, index, words) {
  const currentWord = removeSymbols(word).toLowerCase();
  if (!words[index + 1]) return geeksayWord(currentWord);
  const nextWord = removeSymbols(words[index + 1]).toLowerCase();
  const translatedPhrase = translationsMap.get(currentWord + " " + nextWord);
  if (translatedPhrase) {
    words.splice(index, 1);
    return translatedPhrase;
  }
  return geeksayWord(currentWord);
}

function containsSpecialChars(str) {
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~a-zA-Z]/;
  return specialChars.test(str);
}

function geeksayWord(word) {
  // skipping this geekification if the word was already geekified
  if ([...translationsMap.values()].includes(word)) return word;
  return isNumeric(word) ? handleNumeric(word) : handleText(word);
}

function handleNumeric(word) {
  for (var i = 0; i < word.length; i++) {
    if (containsSpecialChars(word)) {
      return word.toString(2);
    } else {
      return (word >>> 0).toString(2);
    }
  }
}

function handleText(word) {
  return (
    translationsMap.get(removeSymbols(word).toLowerCase()) || word.toLowerCase()
  );
}

function removeSymbols(word) {
  return word.replace(/(?!\n|\r\n)[^a-zA-Z0-9 ]+/, "");
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
