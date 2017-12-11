// Variables

// Answers Array
let hangmanAnswers =
["apocalyptica","atreyu","audioslave","avatar","beartooth","bobaflex","buckethead","bush","chevelle","chimaira","chiodos","cirice","dethklok","disturbed","evanescence","flyleaf","ghost","godsmack","him","halestorm","korn","megadeath","metallica","nickelback","nirvana","pantera","pulley","red","rush","saosin","seether","shinedown","silverstein","skillet","staind","starset","thrice","tool","trapt","trivium","turbowolf","underoath","uriah","volbeat"];

//Generates Random Word From hangmanAnswers Array
let wordChoice = hangmanAnswers[Math.floor(Math.random() * hangmanAnswers.length)];

// Troubleshoot: Log Random Word To Console
console.log(wordChoice, wordChoice.length);

// Empty Arrays For Chosen Word and Guessed Letters
var guessedLettersArray = [];
var answerArray = [];

// Defining Variables For HTML
var wins = document.getElementById('win');
var currentWord = document.getElementById("current-word");
var count = document.getElementById('count');
var lettersGuessed = document.getElementById('empty-div');
var flashWord = document.getElementsByClassName('flashit');

// Winning and Losing Scores
var countDown = 10;
var isWinning = 0;
count.textContent = countDown;
wins.textContent = isWinning;


// Functions


// Underscore Function: Generates Underscore For Each Letter In Word
function underscoreBuilder(randomWord) {
  for (var answerIndex = 0; answerIndex < wordChoice.length; answerIndex++) {
    answerArray.push("_");
  }
return answerArray;
}

// Call Function
const currentUnderscore = underscoreBuilder(wordChoice);

// Joins Characters In answerArray
currentWord.textContent = currentUnderscore.join(' ');

// Troubleshoot: underscoreBuilder Function
console.log(currentUnderscore);


// Keyup Event Initiates Game Function
document.onkeyup = function(event) {
  let keyPress = event.key;
  // Troubleshoot: Logs keyPress to Console
  console.log(keyPress); 

    // Determines Correct Guess and Updates answerArray
    for (var guessIndex = 0; guessIndex < wordChoice.length; guessIndex++) {
      if (wordChoice.charAt(guessIndex) == keyPress) {
        answerArray[guessIndex] = keyPress;
        currentWord.textContent = answerArray.join(' ');
      }
    }

    // Determines If keyPress Is Incorrect, Matches Alphabet Character, and Has Already Been Pressed; Pushes to Array and HTML
    if (wordChoice.indexOf(keyPress) < 0 && keyPress.match(/^[a-z]+$/) && guessedLettersArray.includes(keyPress) === false) {
      guessedLettersArray.push(keyPress);
      lettersGuessed.textContent = guessedLettersArray.join(' ');
      // Decreases Guesses Remaining
      countDown--;
      count.textContent = countDown; 

      // Defines Game Over Conditions
      if (countDown===0) {
        answerArray = [];
        guessedLettersArray = [];
        alert('GAME OVER');
        alert("Who Rocks? " + wordChoice.charAt(0).toUpperCase() + wordChoice.slice(1) + ('.'));
          // Determines End Of Game Or Restart
          if (confirm ('Play Again?') === true) {
            lettersGuessed.textContent = '';
            countDown = 10;
            count.textContent = countDown;
            wordChoice = hangmanAnswers[Math.floor(Math.random() * hangmanAnswers.length)];
            underscoreBuilder(wordChoice);
            currentWord.textContent = answerArray.join(' ');
            // Troubleshoot: Restart
            console.log(wordChoice, answerArray);
          } else {
            alert('Rock on.');
            document.getElementById('current-word').setAttribute("class", "flashit");
            currentWord.textContent = 'GAME OVER';
            document.getElementById('empty-div').setAttribute("class", "flashit");
            lettersGuessed.textContent = 'GAME OVER';
            document.getElementById('win').setAttribute("class", "flashit");
            wins.textContent = 'GAME OVER';
            document.getElementById('count').setAttribute("class", "flashit");
            count.textContent = 'GAME OVER';
          }
      }
    };

  // Restarts Game When User Has Won
  if (answerArray.join('') === wordChoice) {
    alert (wordChoice.charAt(0).toUpperCase() + wordChoice.slice(1) + ' Rocks!');
    // Clears Previous Guesses
    guessedLettersArray = [];
    lettersGuessed.textContent = '';
    // Increments Win Score
    isWinning++;
    wins.textContent = isWinning;
    // Restarts Guesses Remaining
    countDown = 10;
    count.textContent = countDown;
    // New Word Is Chosen At Random And Game Starts Over
    currentWord.textContent = '';
    wordChoice = hangmanAnswers[Math.floor(Math.random() * hangmanAnswers.length)];
    answerArray = [];
    underscoreBuilder(wordChoice);
    currentWord.textContent = answerArray.join(' ');
    // Troubeshoot Restart
    console.log(wordChoice, answerArray);
  }
}