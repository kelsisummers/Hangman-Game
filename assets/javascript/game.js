// Variables

// Answers Array
let hangmanAnswers =
["apocalyptica","atreyu","audioslave","avatar","beartooth","bobaflex","buckethead","bush","chevelle","chimaira","chiodos","cirice","dethklok","disturbed","evanescence","flyleaf","ghost","godsmack","him","halestorm","korn","megadeath","metallica","nickelback","nirvana","pantera","pulley","red","rush","saosin","seether","shinedown","silverstein","skillet","staind","starset","thrice","tool","trapt","trivium","turbowolf","underoath","uriah","volbeat"];

// Prompts Computer To Generate Random Word From Array Above
let wordChoice = hangmanAnswers[Math.floor(Math.random() * hangmanAnswers.length)];

// Troubleshoot: Log Random Word To Console
console.log(wordChoice, wordChoice.length);

// // Not sure? May not need...
// let correctLettersArray = [];

// Defining Variables From HTML
var wins = document.getElementById('win');
var currentWord = document.getElementById("current-word");
var count = document.getElementById('count');
var lettersGuessed = document.getElementById('empty-div');



// Functions


// Underscore Function: Generates Underscore For Each Letter In Word
function underscoreBuilder(currentWord) {
var answerArray = [];
  for (var answerIndex = 0; answerIndex < currentWord.length; answerIndex++) {
answerArray.push("_");
  }
return answerArray;
}
const currentUnderscore = underscoreBuilder(wordChoice);

// Troubleshoot underscoreBuilder
console.log(currentUnderscore);


// Need Help! Key Press Will Generate userGuess
const userGuesses = "l";


// Correct Guesses Function
function checkGuesses(currentGuess, currentWord) {
var correctGuessArray = [];
var countDown = 15;

// Need Help! Will Reduce Count By 1
// if (currentWord.charAt(guessIndex) !== currentGuess) {
//   countDown--;
// }
  for (var guessIndex = 0; guessIndex < currentWord.length; guessIndex++) {
    if (currentWord.charAt(guessIndex) == currentGuess) {
    correctGuessArray.push(currentGuess);
  } else {
    correctGuessArray.push("_");
  }
}

count.textContent = countDown;
var correctGuessArray = correctGuessArray.join(' ');
return correctGuessArray;
}
const myCorrectWordsArray = checkGuesses(userGuesses, wordChoice);

// Need Help! Will Increase Win Score By One; Reset Game
// function isWinning (finishedWord, currentWord) {
//   let correctLettersArray = myCorrectWordsArray;
//   let winning = 0;
//     if (finishedWord == wordChoice) {
//       winning++;
//     }
//     wins.textContent = winning;
//     return true;
// }
// const myLettersArray = isWinning(finishedWord, wordChoice)

// Write to HTML
currentWord.textContent = myCorrectWordsArray;
lettersGuessed.textContent = userGuesses;

// Troubleshoot Check Guesses Function
console.log("Underscores with letters: ", myCorrectWordsArray)