// Short Quiz Challenge #4
// array that holds the 5 questions for this quiz
var questions =
  [
    {
      question: "What is not a JavaScript valid comparison operator?",
      choices: ["<==", "===", "!=", ">=="],
      answer: "!="
    },
    {
      question: "What is not a valid JavaScript variable name?",
      choices: ["ArrayNum", "variablename", "arrayInteger", "variableChar"],
      answer: "ArrayNum"
    },
    {
      question: "What is the correct way to do an HTML comment?",
      choices: ["<# comment #>", "/* comment */", "&/ comment &/", "<! == comment == >"],
      answer: "<! == comment == >"
    },
    {
      question: "Which of the following is a type of EventListener?",
      choices: ["mousetouch", "click", "keysubmit", "hover"],
      answer: "click"
    },
    {
      question: "Which code in JavaScript groups blocks or statements?",
      choices: ["{}", "<>", "!!", "##"],
      answer: "{}"
    },
  ];

//global variables associated with html for retrieval
var tempSection = document.querySelector(".quizSection");
var tempQuestion = document.querySelector(".quizQuestion");
var tempChoice1 = document.querySelector(".quizAnswer1");
var tempChoice2 = document.querySelector(".quizAnswer2");
var tempChoice3 = document.querySelector(".quizAnswer3");
var tempChoice4 = document.querySelector(".quizAnswer4");
var tempWins = document.querySelector(".win");
var tempLosses = document.querySelector(".lose");

// variable to check if user answer is correct, then set to true
var tempCorrect = false;
var tempAnswer = "";

var win = 0;
var losses = 0;

var tempTimer = document.querySelector(".timer-count");
var timer = 0;
var timerCount = 10;

var startButton = document.querySelector(".start-button");

var i = 0;

// this function starts the timer
function startTimer() {
  timer = setInterval(function () {
    timerCount--;
    tempTimer.textContent = timerCount;
    if (timerCount > 0) {
      return
    }
    else {
      gameOver()
    };
  }, 1000);
}

// this function loads the first question once user is ready to start the Quiz
function loadQuestion() {
  tempChoice1.setAttribute("style", "background-color: white");
  tempChoice2.setAttribute("style", "background-color: white");
  tempChoice3.setAttribute("style", "background-color: white");
  tempChoice4.setAttribute("style", "background-color: white");
  tempTimer.textContent = timerCount;

  // is i equal to our questions array?  i cannot be the same always one less than the length
  if (i == questions.length) {
    gameOver()
  }
  else {
    // set the timer if first time through 
    if (i == 0) {
      startTimer()
    }
    tempQuestion.textContent = questions[i].question;
    tempChoice1.textContent = questions[i].choices[0];
    tempChoice2.textContent = questions[i].choices[1];
    tempChoice3.textContent = questions[i].choices[2];
    tempChoice4.textContent = questions[i].choices[3];
    tempAnswer = questions[i].answer;
    checkAnswer();
  };
};

// the user clicks on the answer to the question
function checkAnswer() {
  tempCorrect = false;
  tempChoice1.addEventListener("click", checkIfCorrect1);
  tempChoice2.addEventListener("click", checkIfCorrect2);
  tempChoice3.addEventListener("click", checkIfCorrect3);
  tempChoice4.addEventListener("click", checkIfCorrect4);
};

// these functions are based on the user's choice of answer by highlighting the answer
// let's see if their answer is correct, 
// if it is, let's track the score, add one to win, else add 1 to losses and subtract a second from the time
// as penalty
function checkIfCorrect1() {
  tempCorrect = false;
  event.currentTarget.setAttribute("style",
    "background-color: blue");
  if (tempChoice1.textContent === tempAnswer) {
    tempCorrect = true;
    win++
  }
  else {
    losses++
    timerCount--
  };
  tempWins.textContent = win;
  tempLosses.textContent = losses;
  setTimeout(function () {
    i++
    loadQuestion();
  }, 500)
};

function checkIfCorrect2() {
  tempCorrect = false;
  event.currentTarget.setAttribute("style",
    "background-color: blue");
  if (tempChoice2.textContent == tempAnswer) {
    tempCorrect = true;
    win++
  }
  else {
    losses++
    timerCount--
  };
  tempWins.textContent = win;
  tempLosses.textContent = losses;
  setTimeout(function () {
    i++
    loadQuestion();
  }, 500)
};

function checkIfCorrect3() {
  tempCorrect = false;
  event.currentTarget.setAttribute("style",
    "background-color: blue");
  if (tempChoice3.textContent == tempAnswer) {
    tempCorrect = true;
    win++
  }
  else {
    losses++
    timerCount--
  };
  tempWins.textContent = win;
  tempLosses.textContent = losses;
  setTimeout(function () {
    i++
    loadQuestion();
  }, 500)
};


function checkIfCorrect4() {
  tempCorrect = false;
  event.currentTarget.setAttribute("style",
    "background-color: blue");
  if (tempChoice4.textContent == tempAnswer) {
    tempCorrect = true;
    win++
  }
  else {
    losses++
    timerCount--
  };
  tempWins.textContent = win;
  tempLosses.textContent = losses;
  setTimeout(function () {
    i++
    loadQuestion();
  }, 500)
};

// if all the questions have been answered or if ran out of time, it's game over!
function gameOver() {
  clearInterval(timer);
  tempChoice1.setAttribute("style", "background-color: white");
  tempChoice2.setAttribute("style", "background-color: white");
  tempChoice3.setAttribute("style", "background-color: white");
  tempChoice4.setAttribute("style", "background-color: white");
  tempSection.textContent = "Game Over! Thanks for playing";
};

// Is user ready to take the quiz?
startButton.addEventListener("click", loadQuestion);