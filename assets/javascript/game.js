var gameCharactors = {
wayne: {picture: "https://i.imgur.com/pLJmgMa.jpg"}, 
stewart: {picture: "stewart.jpg"},
jonesy: {picture: "jonesy.jpg"}, 
roald: {picture: "roald.jpg"},
mcmurray: {picture: "mcmurray.jpg"},
katy: {picture: "katy.jpg"},
gail: {picture: "gail.jpg"},
squirrelly_dan: {picture: "sqdan.jpg"},
paster_glen: {picture: "pastorglen.jpg"},
reilly: {picture: "reilly.jpg"}
};

var guessedLetters = [];
var matchedLetters = [];
var wordToGuess = null;
var lettersInWord = [];
var guessesLeft = 10;
var totalGuesses = 0;
var wins = 0;
var losses = 0;

var updateWordToGuess = function () {
    this.wordToGuess = gameCharactors[Math.floor(Math.random() * gameCharactors.length)];
};

this.lettersInWord = this.gameCharactors.split("");

this.resetWordView();
this.updateTotalGuesses();

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

