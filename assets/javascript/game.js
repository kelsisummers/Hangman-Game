var hangman = {
    // "real name": "Gandalf",
    "answers": 
        ["APOCALYTICA","ATREYU","AUDIOSLAVE","AVATAR","BEARTOOTH","BOBAFLEX","BUCKETHEAD","BUSH","CHEVELLE","CHIMAIRA","CHIODOS","CIRICE","DETHKLOK","DISTURBED","EVANESCENCE","FLYLEAF","GHOST","GODSMACK","HIM","HALESTORM","KORN","MEGADEATH","METALLICA","NICKELBACK","NIRVANA","PANTERA","PULLEY","RED","RUSH","SAOSIN","SEETHER","SHINEDOWN","SILVERSTEIN","SKILLET","STAIND","STARSET","THRICE","TOOL","TRAPT","TRIVIUM","TURBOWOLF","UNDEROATH","URIAH","VOLBEAT"],
    "alphabet": 
        ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
}

var answerChoice = hangman.answers[Math.floor(Math.random() * hangman.answers.length)];
console.log(answerChoice);
var emptyDiv = document.getElementById("empty-div");
var count = "15";
var newDiv = document.getElementsByClassName("new-div");
var userChoice;
var winning = answerChoice.split("");

(function () {
  "use strict";

  function createDiv() {
    var boardDiv = document.createElement("div");
    boardDiv.className = "new-div";
    return boardDiv;
  }

  function createAndModifyDivs() {
    var board = document.getElementById("board"),
      myDivs = [];
      var i = 0, length = answerChoice.length;

    for (i; i < length; i++) {
      myDivs.push(createDiv());
      board.appendChild(myDivs[i]);
    }


  }
  
  createAndModifyDivs();

}());

document.onkeyup = function(event) {
  var userChoice = event.key;
  var remaining = document.getElementById("count");
  console.log(userChoice);

// for (var i in winning ){
//   if (userChoice == winning[i]) {
//     console.log(userChoice);
//       }}

for (var i = 0; i < hangman.alphabet.length; i++) {
  if (userChoice == hangman.alphabet[i]) {
    count--;
    remaining.innerText = count;

for (var i = 0; i < hangman.alphabet.length; i++) {
  if (userChoice == hangman.alphabet[i]) {
    var letterGuessed = document.createElement("div");
    emptyDiv.appendChild(letterGuessed);
    letterGuessed.className = "guessed";
    letterGuessed.innerText = userChoice;        
    }
  }
}
}
};