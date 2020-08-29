//----- Global Variables -----//

// variables to keep track of quiz state (from instructor)
var currentQuestionIndex = 0;
var startingTime = questions.length * 15;

//Test Timer
// var startingTime = 3;
var currentTime = startingTime;
var timerId;

// variables to reference DOM elements (from instructor until feedbackEl)
var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById("time");
var choicesEl = document.getElementById("choices");
var submitBtn = document.getElementById("submit");
var startBtn = document.getElementById("start");
var initialsEl = document.getElementById("initials");
var feedbackEl = document.getElementById("feedback");
var startingEl = document.querySelector("#start-screen");
var questionTitle = document.querySelector("#question-title");
var questionChoices = document.querySelector("#choices");
var wrapper = document.querySelector(".wrapper");

// sound effects (from instructor)
var sfxRight = new Audio("assets/sfx/correct.wav");
var sfxWrong = new Audio("assets/sfx/incorrect.wav");

// checking if jquery is loaded
// window.onload = function() {
//   if (window.jQuery) {  
//       // jQuery is loaded  
//       alert("Yeah!");
//   } else {
//       // jQuery is not loaded
//       alert("Doesn't Work");
//   }
// }
$(document).ready(function () { console.log("jQuery ready") });

//----- Global Functions -----//

//Function Definition: Create the Timer
function createTimer() {
  timerEl.innerHTML = startingTime;

  timerId = setInterval(function () {
    timerEl.innerHTML = +timerEl.innerHTML - 1;

    if (timerEl.innerHTML < 1) {
      stopTimer(timerId);
    }
  }, 1000);
}

//Function Definition: Stop the Timer
function stopTimer(x) {
  clearInterval(x);
}

//Function Definition: Hide the Starting prompt
function hideStart() {
  $("#start-screen").hide();
}

//Function Definition: Show the Questions
function showQuestions() {
  $("#questions").show();
  getQuestion();
}
// Function Definition: Start the Quiz
function startQuiz() {
  // hide start screen (from instructor)
  hideStart();
  // un-hide questions section (from instructor)
  showQuestions();
  // start timer & show starting time (from instructor)
  createTimer();
}
// Penalize function
function penalizeTime() {
  //   // display new time on page (from instructor)
  timerEl.innerHTML = timerEl.innerHTML - 10
  // if time, add in flash of red background color when penalized
}
function getQuestion() {
  // get current question object from array (from instructor)
  var currentQuestion = questions[currentQuestionIndex];
  // update title with current question (from instructor)
  questionTitle.innerHTML = currentQuestion.title;
  // clear out any old question choices (from instructor)
  // currentQuestion[i-1].choices.classList.add("hide");
  // loop over choices (from instructor)
  for (var i = 0; i < currentQuestion.choices.length; i++) {

    // create new button for each choice (from instructor)
    var newButton = document.createElement("button");
    newButton.id = i;
    newButton.innerHTML = +[i] + 1 + ": " + currentQuestion.choices[i];
    newButton.className = "choices";
    // display on the page (from instructor)
    wrapper.appendChild(newButton);
    newButton.onclick = checkAnswer;
    // console.log(questions[currentQuestionIndex].answer);
  }

  function checkAnswer() {
    // console.log(this.innerHTML[0]-1);
    // console.log(currentQuestion.choices[parseInt(userSelection)])
    var userSelection = this.innerHTML[0] - 1;
    if (currentQuestion.choices[parseInt(userSelection)] == currentQuestion.answer) {
      //   // play "right" sound effect (from instructor)
      sfxRight.play();
      $("#correct").show();
    }
    //   // else  (from instructor)
    else {
      //   // penalize time (from instructor)
      penalizeTime();
      //   // play "wrong" sound effect (from instructor)
      sfxWrong.play();
      $("#incorrect").show();
    }
  }
}


  // flash right/wrong feedback on page for half a second (from instructor)

//   // move to next question (from instructor)

//   // check if we've run out of questions (from instructor)
//   // quizEnd (from instructor)
//   // else  (from instructor)
//   // getQuestion (from instructor)
//   currentQuestionIndex++;
//   getQuestion();
// }

function quizEnd() {
  // stop timer (from instructor)

  // clearInterval();

  // show end screen (from instructor)

  // show final score (from instructor)
  finalScoreEl.textContent = userScore;
  console.log(finalScoreEl);
  // hide questions section (from instructor)
  questionsEl.className = "hide";
}

function clockTick() {
  // update time (from instructor)

  // check if user ran out of time (from instructor)
}

function saveHighscore() {
  // get value of input box (from instructor)

  // make sure value wasn't empty (from instructor)
  // get saved scores from localstorage, or if not any, set to empty array (from instructor)

  // format new score object for current user (from instructor)

  // save to localstorage (from instructor)

  // redirect to next page (from instructor)
}

function checkForEnter(event) {
  // check if event key is enter (from instructor)
  // saveHighscore (from instructor)
}

// user clicks button to submit initials (from instructor)
submitBtn.onclick = saveHighscore;

// user clicks button to start quiz (from instructor)
startBtn.addEventListener('click', startQuiz);
initialsEl.onkeyup = checkForEnter;
