// Variables

// Answers Array
let hangmanAnswers =
["apocalyptica","atreyu","audioslave","avatar","beartooth","bobaflex","buckethead","bush","chevelle","chimaira","chiodos","cirice","dethklok","disturbed","evanescence","flyleaf","ghost","godsmack","him","halestorm","korn","megadeath","metallica","nickelback","nirvana","pantera","pulley","red","rush","saosin","seether","shinedown","silverstein","skillet","staind","starset","thrice","tool","trapt","trivium","turbowolf","underoath","uriah","volbeat"];

// Prompts Computer To Generate Random Word From Array Above
let wordChoice = hangmanAnswers[Math.floor(Math.random() * hangmanAnswers.length)];

// Troubleshoot: Log Random Word To Console
console.log(wordChoice, wordChoice.length);

// Variables for User Guesses & lettersGuessedArray
var guessedLettersArray = [];

var answerArray = [];

// Defining Variables From HTML
var wins = document.getElementById('win');
var currentWord = document.getElementById("current-word");
var count = document.getElementById('count');
var lettersGuessed = document.getElementById('empty-div');



// Functions


// Underscore Function: Generates Underscore For Each Letter In Word
function underscoreBuilder(currentWord) {
  for (var answerIndex = 0; answerIndex < currentWord.length; answerIndex++) {
    answerArray.push("_");

  }
return answerArray;
}
const currentUnderscore = underscoreBuilder(wordChoice);
currentWord.textContent = currentUnderscore.join(' ');

// Troubleshoot underscoreBuilder
console.log(currentUnderscore);


// Keypress Generates User Guess
document.onkeyup = function(event) {
  let keyPress = event.key;
  console.log(keyPress); 

  // Correct Guesses Function
  
    var correctGuessArray = [];
console.log(wordChoice.indexOf(keyPress));

    if (wordChoice.indexOf(keyPress) < 0) {
      guessedLettersArray.push(keyPress);
      lettersGuessed.textContent = guessedLettersArray.join(' ');
    };
      

    for (var guessIndex = 0; guessIndex < wordChoice.length; guessIndex++) {
      if (wordChoice.charAt(guessIndex) == keyPress) {
        answerArray[guessIndex] = keyPress;
      }
  }

  currentWord.textContent = answerArray.join(' ');
}



// Winning and Losing
var countDown = 15;
var isWinning = 0;
count.textContent = countDown;
wins.textContent = isWinning;

  // Need Help! Will Reduce Count By 1
  // if (currentWord.charAt(guessIndex) !== currentGuess) {
  //   countDown--;
  // }

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
