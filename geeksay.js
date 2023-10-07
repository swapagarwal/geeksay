const translations = require('./translations.js')
const quotes = require('./quotes.js');  

const translationsMap = new Map(Object.entries(translations));


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

export default geeksay;
