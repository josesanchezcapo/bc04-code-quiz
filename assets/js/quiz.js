var minutesDisplay = document.querySelector("#minutes");
var secondsDisplay = document.querySelector("#seconds");
var btnStart = document.querySelector("#start");

var totalSeconds = 0;
var secondsElapsed = 0;
var secondsElapsed = 0;
var interval;


// The array of questions for the quiz.
var questions = [
  { q: "Inside which HTML element do we put the JavaScript?", options:["<javascript>","<scripting>","<js>","<script>"], a: "<script>" },
  { q: "What is the correct syntax for referring to an external script called 'xxx.js'?", options:["<script href='xxx.js'", "<script src='xxx.js'","<script name='xxx.js'"], a: "<script src='xxx.js'>" },
  { q: "The external JavaScript file must contain the <script> tag.", options:["False","True"], a: "False" },
  { q: "How to write an IF statement in JavaScript?", options:["if(i==5)","if i = 5","if then"],  a: "if (i == 5)" },
  { q: "How does a WHILE loop start?", options:["for","do","while"] , a: "while" }
];

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
