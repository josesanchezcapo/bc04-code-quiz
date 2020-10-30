
// select all elements

var start = document.querySelector("#start");
var quiz = document.getElementById("quiz");
var questionDisplay = document.querySelector("#displayQuestion");
var choiceA = document.querySelector("#A");
var choiceB = document.querySelector("#B");
var choiceC = document.querySelector("#C");
var choiceD = document.querySelector("#D");
var counter = document.getElementById("counter");
var timeGauge = document.getElementById("timeGauge");
var progress = document.getElementById("progress");
var scoreDiv = document.getElementById("scoreContainer");
var displayScore = document.querySelector("#finalScore");
var displayScoreImage = document.querySelector("#finalScoreImage");


var totalSeconds = 0;
var secondsElapsed = 0;
var secondsElapsed = 0;
var interval;

// The array of questions for the quiz.
var questions = [
  {
    question: "1. What is jQuery?",
    choiceA: "HTML",
    choiceB: "SQL library",
    choiceC: "js library",
    choiceD: "A new thing",
    correct: "C"
  }, {
    question: "Dom",
    choiceA: "API for HTML",
    choiceB: "getElementById()",
    choiceC: "collection",
    choiceD: "B & C",
    correct: "A"
  }, {
    question: "JavaScript Object Notation",
    choiceA: "DOM",
    choiceB: "My son name",
    choiceC: "json",
    choiceD: "A new Server",
    correct: "C"
  }, {
    question: "application programming interface?",
    choiceA: "API",
    choiceB: "APPI",
    choiceC: "IPA",
    choiceD: "A % C",
    correct: "A"
  }
];

// Define varibles

var lastQuestion = questions.length - 1;
var runningQuestion = 0;
var count = 0;
var questionTime = 10; // 10s
var gaugeWidth = 150; // 150px
var gaugeUnit = gaugeWidth / questionTime;
var TIMER;
var score = 0;

// Render questions
function renderQuestion() {
  var q = questions[runningQuestion];

  questionDisplay.textContent = q.question;
  choiceA.innerHTML = q.choiceA;
  choiceB.innerHTML = q.choiceB;
  choiceC.innerHTML = q.choiceC;
  choiceD.innerHTML = q.choiceD;
}

start.addEventListener("click", startQuiz);

// Star Quiz
function startQuiz() {
  start.style.display = "none";
  renderQuestion();
  // quiz.style.display = "block";
  renderProgress();
  renderCounter();
  TIMER = setInterval(renderCounter, 1000); // 1000ms = 1s


}

// Progress
function renderProgress() {
  for (var qIndex = 0; qIndex <= lastQuestion; qIndex++) {
    progress.innerHTML += "<div class='prog' id=" + qIndex + "></div>";
  }
}

// Counter

function renderCounter() {
  if (count <= questionTime) {
    counter.innerHTML = count;
    timeGauge.style.width = count * gaugeUnit + "px";
    count++
  } else {
    count = 0;
    // change progress color to red
    answerIsWrong();
    if (runningQuestion < lastQuestion) {
      runningQuestion++;
      renderQuestion();
    } else {
      // end the quiz and show the score
      clearInterval(TIMER);
      scoreRender();
    }
  }
}

// checkAnwer

function checkAnswer(answer) {
  if (answer == questions[runningQuestion].correct) {
    // answer is correct
    score++;
    // change progress color to green
    answerIsCorrect();
  } else {
    // answer is wrong
    // change progress color to red
    answerIsWrong();
  }
  count = 0;
  if (runningQuestion < lastQuestion) {
    runningQuestion++;
    renderQuestion();
  } else {
    // end the quiz and show the score
    clearInterval(TIMER);
    scoreRender();
  }
}

// answer is correct
function answerIsCorrect() {
  document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

// answer is Wrong
function answerIsWrong() {
  document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

// score render
function scoreRender() {
  scoreDiv.style.display = "block";

  // calculate the amount of question percent answered by the user
  var scorePerCent = Math.round(100 * score / questions.length);

  // choose the image based on the scorePerCent
  var img = (scorePerCent >= 80) ? "./assets/img/5.png" :
    (scorePerCent >= 60) ? "./assets/img/4.png" :
      (scorePerCent >= 40) ? "./assets/img/3.png" :
        (scorePerCent >= 20) ? "./assets/img/2.png" :
          "./assets/img/1.png";



  // Display score and %
  displayScoreImage.innerHTML = "<img src=" + img + ">";
  displayScore.textContent = scorePerCent + ' %';

  // Local storage name and score

}
