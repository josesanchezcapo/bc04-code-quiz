var minutesDisplay = document.querySelector("#minutes");
var secondsDisplay = document.querySelector("#seconds");
var btnStart = document.querySelector("#start");
var questionDisplay = document.querySelector("#displayQuestion");
var choiseDisplay0 = document.querySelector("#choice_0");
var choiseDisplay1 = document.querySelector("#choice_1");
var choiseDisplay2 = document.querySelector("#choice_2");
var choiseDisplay3 = document.querySelector("#choice_3");

var totalSeconds = 0;
var secondsElapsed = 0;
var secondsElapsed = 0;
var interval;


// The array of questions for the quiz.
var questions = [
  { q: "Inside which HTML element do we put the JavaScript?",
    c0: "TEST-0", 
    c1: "TEST-1",
    c2: "TEST-2",
    c3: "TEST-3"
  
  }
];

//

var lastQuestion = questions.length - 1;

var runningQuestion = 0;

// render a question

function renderQuestion(){

  var t = questions[0];

  questionDisplay.textContent = t.q 
  choiseDisplay0.textContent = t.c0;
  choiseDisplay1.textContent = t.c1;
  choiseDisplay2.textContent = t.c2;
  choiseDisplay3.textContent = t.c3;


}//

// This function are just for making sure the numbers look nice for the html elements
function getFormattedMinutes() {

  var secondsLeft = totalSeconds - secondsElapsed;

  var minutesLeft = Math.floor(secondsLeft / 60);

  var formattedMinutes;

  if (minutesLeft < 10) {
    formattedMinutes = "0" + minutesLeft;
  } else {
    formattedMinutes = minutesLeft;
  }

  return formattedMinutes;
}

// This function are just for making sure the numbers look nice for the html elements

function getFormattedSeconds() {
  var secondsLeft = (totalSeconds - secondsElapsed) % 60;

  var formattedSeconds;

  if (secondsLeft < 10) {
    formattedSeconds = "0" + secondsLeft;
  } else {
    formattedSeconds = secondsLeft;
  }

  return formattedSeconds;
}

function renderTime() {
  // When renderTime is called it sets the textContent for the timer html...

  minutesDisplay.textContent = getFormattedMinutes();
  secondsDisplay.textContent = getFormattedSeconds();
}

function setTime() {
  var minutes = 10;

  clearInterval(interval);
  totalSeconds = minutes * 60;
}


function startTimer() {
  renderQuestion();
  setTime();

  // Timer only start if totalSeconds is > 0
  if (totalSeconds > 0) {
    interval = setInterval(function () {
      secondsElapsed++;
      // RenderTime() is called here once every second.
      renderTime();
    }, 1000);
  }
}



btnStart.addEventListener("click", startTimer);
//btnStart.addEventListener("click", renderQuestion);