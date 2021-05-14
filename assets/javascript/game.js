var gameCharactors = {
    wayne: { picture: "https://i.imgur.com/pLJmgMa.jpg" },
    stewart: { picture: "stewart.jpg" },
    jonesy: { picture: "jonesy.jpg" },
    roald: { picture: "roald.jpg" },
    mcmurray: { picture: "mcmurray.jpg" },
    katy: { picture: "katy.jpg" },
    gail: { picture: "gail.jpg" },
    dan: { picture: "sqdan.jpg" },
    glen: { picture: "pastorglen.jpg" },
    reilly: { picture: "reilly.jpg" }
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


    this.lettersInWord = this.gameCharactors.split("");

    this.resetWordView();
    this.updateTotalGuesses();
};
let updatePage = function (letter) {
    if (this.guessedLeft === 0) {
        this.restartGame();
    }
};

var updateGuessedLetters = function () {
    if ((this.guessedLetters.indexOf(letter) === -1) && (this.lettersInWord.indexOf(letter) === -1)) {
        guessedLetters.push(letter);
        guessesLeft--;
        document.querySelector("#guesses-so-far").innerHTML = guessedLetters.join(", ");
        document.querySelector("#guesses-left").innerHTML = guessesLeft;
    }

};

var updateMatchedLetters = function () {
    for (let i = 0; i < this.lettersInWord.length; i++) {
        if ((letter === this.lettersInWord[i]) && (this.matchedLetters.indexOf(letter) === -1)) {
            this.matchedLetters.push(letter);
        }
    }
};

var updateWordVeiw = function () {
    var wordView = "";
    for (let i = 0; i < this.lettersInWord.length; i++) {
        if (this.matchedLetters.indexOf(this.lettersInWord[i]) !== -1) {
            wordView += this.lettersInWord[i];
        }
        else {
            wordView += "&nbsp;_&nbsp;";
        }
        document.querySelector("current-word").innerHTML = wordView;
    }
};

const reset = function () {
    document.querySelector("#guesses-so-far").innerHTML = "";
    guessedLetters = [];
    guessesLeft = 10;
    updateGuessedLetters();
    updateWordToGuess();
    updateMatchedLetters();
    updateTotalGuesses();
    updateWordVeiw();
};

var updateWins = function () {
    var win;

    if (this.matchedLetters.length === 0) {
        win = false;
    }
    else {
        win = true;
    }

    if (win) {
        this.win = this.wins + 1;
        document.querySelector("#wins").innerHTML = this.wins;
        document.querySelector("#charactorImg").innerHTML = this.gameCharactors.picture;

        return true;

    }
    return false;
};
document.onkeyup = function (event) {

    if (event.key >= 65 && event.key <= 122) {
        gameCharactors.lettersInWord = event.key.toLowerCase();

        gameCharactors.updatePage(gameCharactors.guessedLetters);
    }

};
console.log(guessedLetters);