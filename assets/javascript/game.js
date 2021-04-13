const gameCharactors = ["wayne", "stewart", "jonesy", "roald", "mcmurray", "katy", "gail", "squirrelly dan", "pastor glen", "reilly"];

var guessedLetters = [];

var wordToGuess = null;

var guessesLeft = 10;

var wins = 0;
var losses = 0;

var updateWordToGuess = function () {
    wordToGuess = gameCharactors[Math.floor(Math.random() * gameCharactors.length)];
};

var updateGuessedLetters = function () {
    document.querySelector("#guesses-so-far").innerHTML = guessedLetters.join(", ");
};

var updateGuessesLeft = function () {
    document.querySelector("#guesses-left").innerHTML = guessesLeft;
};

const reset = function () {
    guessedLetters = [];
    guessesLeft = 10;
    updateGuessedLetters();
    updateGuessesLeft();
    updateWordToGuess();
};

updateGuessesLeft();
updateWordToGuess();

document.onkeyup = function (event) {

    guessesLeft--;

    const letter = event.key.toLocaleUpperCase();

    guessedLetters.push(letter);

    updateGuessedLetters();
    updateGuessesLeft();
};