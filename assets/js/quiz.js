 // definitions

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
    {
      q: "Inside which HTML element do we put the JavaScript?",
      answers: {
        c0: "<script>",
        c1: "<js>",
        c2: "<javascript>",
        c3: "<!js-->"
      },
      correctAnswer: 'c0'
    },
    {
      q: "Question -2",
      answers: {
        c0: "2.0",
        c1: "2.1",
        c2: "2.2",
        c3: "2.3"
      },
      correctAnswer: 'c0'
    },
    {
      q: "3",
      answers: {
        c0: "3.0",
        c1: "3.1",
        c2: "3.2",
        c3: "3.3"
      },
      correctAnswer: 'c0'
    },
    {
      q: "4 test",
      answers: {
        c0: "4.0",
        c1: "4.1",
        c2: "4.2",
        c3: "4.3"
      },
      correctAnswer: 'c0'
    },
    {
      q: "5",
      answers: {
        c0: "5.0",
        c1: "5.1",
        c2: "5.2",
        c3: "5.3"
      },
      correctAnswer: 'c0'
    },
    {
      q: "6-test",
      answers: {
        c0: "6.0",
        c1: "6.1",
        c2: "6.2",
        c3: "6.3"
      },
      correctAnswer: 'c0'
    }
  ];
  
  //var currectQuestion = 0;
  //var questionIndex = currectQuestion;

  function renderQuestion() {
  

}
    /*
   // if (currectQuestion < questions.length) {
  
      questionDisplay.textContent = questions[currectQuestion].q;
      choiseDisplay0.textContent = questions[currectQuestion].answers.c0;
      choiseDisplay1.textContent = questions[currectQuestion].answers.c1;
      choiseDisplay2.textContent = questions[currectQuestion].answers.c2;
      choiseDisplay3.textContent = questions[currectQuestion].answers.c3;
  
      currectQuestion++;
      questionIndex = currectQuestion;
      answerValuation();
  
    }
  
  }
  
  function answerValuation() {
  
    

    
  
  
  
  }
*/

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
    btnStart.textContent = 'stop';
    renderQuestion();

    // Timer only start if totalSeconds is > 0
    if (totalSeconds > 0) {
      interval = setInterval(function () {
        secondsElapsed++;
        // RenderTime() is called here once every second.
        renderTime();
      }, 1000);
    }

  }
  

btnStart.addEventListener("click",startTimer);