// variables to keep track of quiz state (from instructor)
var currentQuestionIndex = 0;
var startingTime = questions.length * 15;
var currentTime = startingTime;
var timerId;

// variables to reference DOM elements (from instructor)
var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById("time");
var choicesEl = document.getElementById("choices");
var submitBtn = document.getElementById("submit");
var startBtn = document.getElementById("start");
var initialsEl = document.getElementById("initials");
var feedbackEl = document.getElementById("feedback");

// sound effects (from instructor)
var sfxRight = new Audio("assets/sfx/correct.wav");
var sfxWrong = new Audio("assets/sfx/incorrect.wav");

function startQuiz() {
  // hide start screen (from instructor)

  // un-hide questions section (from instructor)

  // start timer (from instructor)
  timerId = setInterval(function () {
    var secondsLeft = currentTime--;
    timerEl.textContent = (secondsLeft + " seconds");
    console.log(secondsLeft);

    // QD: clearing interval below currently does not work, numbers hit negative
    // if (secondsLeft < 1)
    //   clearInterval();
    //   secondsLeft = 0;
  }, 1000);


  // show starting time (from instructor)

  getQuestion();
}


function getQuestion() {
  // get current question object from array (from instructor)
  questions[currentQuestionIndex];
  // update title with current question (from instructor)

  // clear out any old question choices (from instructor)

  // loop over choices (from instructor)

  // create new button for each choice (from instructor)

  // attach click event listener to each choice (from instructor)

  // display on the page (from instructor)
}

function questionClick() {
  // check if user guessed wrong (from instructor)
  // penalize time (from instructor)

  // display new time on page (from instructor)

  // play "wrong" sound effect (from instructor)

  // else  (from instructor)
  // play "right" sound effect (from instructor)


  // flash right/wrong feedback on page for half a second (from instructor)

  // move to next question (from instructor)

  // check if we've run out of questions (from instructor)
  // quizEnd (from instructor)
  // else  (from instructor)
  // getQuestion (from instructor)
}

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
// submitBtn.onclick = saveHighscore;

// user clicks button to start quiz (from instructor)
startBtn.addEventListener('click', startQuiz);

// initialsEl.onkeyup = checkForEnter;
