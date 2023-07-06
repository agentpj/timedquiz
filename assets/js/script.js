var questions =
  [
    {
      question: "What is not a JavaScript valid comparison operator?",
      choices: ["a) <==", "b) ===", "c) !=", "d) >=="],
      answer: 3
    },
    {
      question: "What is not a valid JavaScript variable name?",
      choices: ["a) ArrayNum", "b) variablename", "c) arrayInteger", "d) variableChar"],
      answer: 1
    },
    {
      question: "What is the correct way to do an HTML comment?",
      choices: ["a) <# comment #>", "b) /* comment */", "c) &/ comment &/", "d) <! == comment == >"],
      answer: 4
    },
    {
      question: "Which of the following is a type of EventListener?",
      choices: ["a) mousetouch", "b) click", "c) keysubmit", "d) hover"],
      answer: 2
    },
    {
      question: "Which code in JavaScript groups blocks or statements?",
      choices: ["a) {}", "b) <>", "c) !!", "d) ##"],
      answer: 1
    },
  ];

var tempQuestion = document.querySelector(".quizQuestion");
var tempChoice1 = document.querySelector(".quizAnswer1");
var tempChoice2 = document.querySelector(".quizAnswer2");
var tempChoice3 = document.querySelector(".quizAnswer3");
var tempChoice4 = document.querySelector(".quizAnswer4");
var tempAnswer = "";


// var wordBlank = document.querySelector(".word-blanks");
// var win = document.querySelector(".win");
// var lose = document.querySelector(".lose");
// var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");

// var chosenWord = "";
// var numBlanks = 0;
// var winCounter = 0;
// var loseCounter = 0;
// var isWin = false;
// var timer;
// var timerCount;

// // Arrays used to create blanks and letters on screen
// var lettersInChosenWord = [];
// var blanksLetters = [];

function loadQuestion() {
  for (var i = 0; i < questions.length; i++) {
    console.log(questions[i]);
    // var question = questions[i].question;
    tempQuestion.textContent = questions[i].question;
    console.log("q1 " + tempQuestion.textContent);
    tempChoice1.textContent = questions[i].choices[0];
    console.log("choices " + tempChoice1.textContent);
    tempChoice2.textContent = questions[i].choices[1];
    tempChoice3.textContent = questions[i].choices[2];
    tempChoice4.textContent = questions[i].choices[3];
    tempAnswer = questions[i].answer - 1;
    tempCorrect = false;

    tempChoice1.addEventListener("click", checkIfCorrect1);
    tempChoice2.addEventListener("click", checkIfCorrect1);
    tempChoice3.addEventListener("click", checkIfCorrect1);
    tempChoice4.addEventListener("click", checkIfCorrect1);
    
  };
};



function checkIfCorrect1() {
  console.log("here");
  event.currentTarget.setAttribute("style",
    "background-color: orange");
  if (tempAnswer = 0) {
    tempCorrect = true;
  }
};

function checkIfCorrect2(tempAnswer, tempCorrect) {
  if (tempAnswer = 1) {
    tempCorrect = true;
  }
};

function checkIfCorrect3(tempAnswer, tempCorrect) {
  if (tempAnswer = 2) {
    tempCorrect = true;
  }
};

function checkIfCorrect4(tempAnswer, tempCorrect) {
  if (tempAnswer = 3) {
    tempCorrect = true;
  }
};

// // The init function is called when the page loads 
// function init() {
//   getWins();
//   getlosses();
// }

// // The startGame function is called when the start button is clicked
// function startGame() {
//   isWin = false;
//   timerCount = 10;
//   // Prevents start button from being clicked when round is in progress
//   startButton.disabled = true;
//   renderBlanks()
//   startTimer()
// }

// // The winGame function is called when the win condition is met
// function winGame() {
//   wordBlank.textContent = "YOU WON!!!🏆 ";
//   winCounter++
//   startButton.disabled = false;
//   setWins()
// }

// // The loseGame function is called when timer reaches 0
// function loseGame() {
//   wordBlank.textContent = "GAME OVER";
//   loseCounter++
//   startButton.disabled = false;
//   setLosses()
// }

// // The setTimer function starts and stops the timer and triggers winGame() and loseGame()
// function startTimer() {
//   // Sets timer
//   timer = setInterval(function() {
//     timerCount--;
//     timerElement.textContent = timerCount;
//     if (timerCount >= 0) {
//       // Tests if win condition is met
//       if (isWin && timerCount > 0) {
//         // Clears interval and stops timer
//         clearInterval(timer);
//         winGame();
//       }
//     }
//     // Tests if time has run out
//     if (timerCount === 0) {
//       // Clears interval
//       clearInterval(timer);
//       loseGame();
//     }
//   }, 1000);
// }

// // Creates blanks on screen
// function renderBlanks() {
//   // Randomly picks word from words array
//   chosenWord = words[Math.floor(Math.random() * words.length)];
//   lettersInChosenWord = chosenWord.split("");
//   numBlanks = lettersInChosenWord.length;
//   blanksLetters = []
//   // Uses loop to push blanks to blankLetters array
//   for (var i = 0; i < numBlanks; i++) {
//     blanksLetters.push("_");
//   }
//   // Converts blankLetters array into a string and renders it on the screen
//   wordBlank.textContent = blanksLetters.join(" ")
// }

// // Updates win count on screen and sets win count to client storage
// function setWins() {
//   win.textContent = winCounter;
//   localStorage.setItem("winCount", winCounter);
// }

// // Updates lose count on screen and sets lose count to client storage
// function setLosses() {
//   lose.textContent = loseCounter;
//   localStorage.setItem("loseCount", loseCounter);
// }

// // These functions are used by init
// function getWins() {
//   // Get stored value from client storage, if it exists
//   var storedWins = localStorage.getItem("winCount");
//   // If stored value doesn't exist, set counter to 0
//   if (storedWins === null) {
//     winCounter = 0;
//   } else {
//     // If a value is retrieved from client storage set the winCounter to that value
//     winCounter = storedWins;
//   }
//   //Render win count to page
//   win.textContent = winCounter;
// }

// function getlosses() {
//   var storedLosses = localStorage.getItem("loseCount");
//   if (storedLosses === null) {
//     loseCounter = 0;
//   } else {
//     loseCounter = storedLosses;
//   }
//   lose.textContent = loseCounter;
// }

// function checkWin() {
//   // If the word equals the blankLetters array when converted to string, set isWin to true
//   if (chosenWord === blanksLetters.join("")) {
//     // This value is used in the timer function to test if win condition is met
//     isWin = true;
//   }
// }

// // Tests if guessed letter is in word and renders it to the screen.
// function checkLetters(letter) {
//   var letterInWord = false;
//   for (var i = 0; i < numBlanks; i++) {
//     if (chosenWord[i] === letter) {
//       letterInWord = true;
//     }
//   }
//   if (letterInWord) {
//     for (var j = 0; j < numBlanks; j++) {
//       if (chosenWord[j] === letter) {
//         blanksLetters[j] = letter;
//       }
//     }
//     wordBlank.textContent = blanksLetters.join(" ");
//   }
// }

// // Attach event listener to document to listen for key event
// document.addEventListener("keydown", function(event) {
//   // If the count is zero, exit function
//   if (timerCount === 0) {
//     return;
//   }
//   // Convert all keys to lower case
//   var key = event.key.toLowerCase();
//   var alphabetNumericCharacters = "abcdefghijklmnopqrstuvwxyz0123456789 ".split("");
//   // Test if key pushed is letter
//   if (alphabetNumericCharacters.includes(key)) {
//     var letterGuessed = event.key;
//     checkLetters(letterGuessed)
//     checkWin();
//   }
// });

// // Attach event listener to start button to call startGame function on click
// startButton.addEventListener("click", startGame);

// // Calls init() so that it fires when page opened
// init();

// // Bonus: Add reset button
// var resetButton = document.querySelector(".reset-button");

// function resetGame() {
//   // Resets win and loss counts
//   winCounter = 0;
//   loseCounter = 0;
//   // Renders win and loss counts and sets them into client storage
//   setWins()
//   setLosses()
// }
// Attaches event listener to button
// resetButton.addEventListener("click", resetGame);
startButton.addEventListener("click", loadQuestion);
