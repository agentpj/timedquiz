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

var tempSection = document.querySelector(".quizSection");
var tempQuestion = document.querySelector(".quizQuestion");
var tempChoice1 = document.querySelector(".quizAnswer1");
var tempChoice2 = document.querySelector(".quizAnswer2");
var tempChoice3 = document.querySelector(".quizAnswer3");
var tempChoice4 = document.querySelector(".quizAnswer4");
var tempWins = document.querySelector(".win");
var tempLosses = document.querySelector(".lose");


var tempAnswer = "";
var win = 0;
var losses = 0;
var tempCorrect = false;

var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");

var i = 0;


function loadQuestion() {
  tempChoice1.setAttribute("style", "background-color: white");
  tempChoice2.setAttribute("style", "background-color: white");
  tempChoice3.setAttribute("style", "background-color: white");
  tempChoice4.setAttribute("style", "background-color: white");

  if (i == questions.length) {
    gameOver()
  }
  else {
    tempQuestion.textContent = questions[i].question;
    tempChoice1.textContent = questions[i].choices[0];
    tempChoice2.textContent = questions[i].choices[1];
    tempChoice3.textContent = questions[i].choices[2];
    tempChoice4.textContent = questions[i].choices[3];
    tempAnswer = questions[i].answer;
    checkAnswer();
  };
};

function checkAnswer() {
  tempCorrect = false;
  tempChoice1.addEventListener("click", checkIfCorrect1);
  tempChoice2.addEventListener("click", checkIfCorrect2);
  tempChoice3.addEventListener("click", checkIfCorrect3);
  tempChoice4.addEventListener("click", checkIfCorrect4);
};

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
    win ++
  }
  else {
    losses++
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
    win ++
  }
  else {
    losses++
  };
  tempWins.textContent = win;
  tempLosses.textContent = losses;
  setTimeout(function () {
    i++
    loadQuestion();
  }, 500)
  };


function gameOver() {
  tempChoice1.setAttribute("style", "background-color: white");
  tempChoice2.setAttribute("style", "background-color: white");
  tempChoice3.setAttribute("style", "background-color: white");
  tempChoice4.setAttribute("style", "background-color: white");
  tempSection.textContent = "Game Over! Thanks for playing";
};

startButton.addEventListener("click", loadQuestion);