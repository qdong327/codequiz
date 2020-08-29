//----- Global Variables -----//

// variables to keep track of quiz state (from instructor)
var currentQuestionIndex = 0;
var startingTime = questions.length * 15;
var currentQuestion = questions[currentQuestionIndex];
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
var finalScoreEl = document.querySelector("#final-score");
// var endingElement = document.querySelector("#end-screen");

// sound effects (from instructor)
var sfxRight = new Audio("assets/sfx/correct.wav");
var sfxWrong = new Audio("assets/sfx/incorrect.wav");

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
  displayQuestion();
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
function displayQuestion() {
  // get current question object from array (from instructor)
  // update title with current question (from instructor)
  questionTitle.innerHTML = currentQuestion.title;
  // clear out any old question choices (from instructor)
  choicesEl.innerHTML = "";
  // loop over choices (from instructor)
  for (var i = 0; i < currentQuestion.choices.length; i++) {

    // create new button for each choice (from instructor)
    var newButton = document.createElement("button");
    newButton.id = i;
    newButton.innerHTML = +[i] + 1 + ": " + currentQuestion.choices[i];
    newButton.className = "choices button";
    // display on the page (from instructor)
    choicesEl.appendChild(newButton);
    newButton.onclick = checkAnswer;
    // console.log(questions[currentQuestionIndex].answer);
  }
}
// More function definitions
function removeFeedback() {
  feedbackEl.classList.add("hide");
}

function checkAnswer() {
  // console.log(this.innerHTML[0]-1);
  // console.log(currentQuestion.choices[parseInt(userSelection)])
  var userSelection = this.innerHTML[0] - 1;
  if (currentQuestion.choices[parseInt(userSelection)] == currentQuestion.answer) {
    //   // play "right" sound effect (from instructor)
    sfxRight.play();
    feedbackEl.innerHTML = "Correct!"
    feedbackEl.classList.remove("hide");
    setTimeout(removeFeedback, 750)
    getNextQuestion();
  }
  //   // else  (from instructor)
  else {
    //   // penalize time (from instructor)
    penalizeTime();
    //   // play "wrong" sound effect (from instructor)
    sfxWrong.play();
    feedbackEl.innerHTML = "Nope!"
    feedbackEl.classList.remove("hide");
    setTimeout(removeFeedback, 750)
  }
}

//   // move to next question (from instructor)
function getNextQuestion() {
  //   // check if we've run out of questions (from instructor)
  // [q1, q2, q3, q4, q5] ex: current index is 4
  if (currentQuestionIndex == questions.length - 1) {
    //   // quizEnd (from instructor)
    quizEnd();
  }
  //   // else  (from instructor)
  else {
    //   // displayQuestion (from instructor)
    currentQuestionIndex = currentQuestionIndex + 1;
    currentQuestion = questions[currentQuestionIndex];
    console.log(currentQuestion);
    displayQuestion();
  }
}

function quizEnd() {
  console.log("quizEnd");
  // stop timer (from instructor)
  stopTimer(timerId);
  // clearInterval();

  // show end screen (from instructor)
  $("#end-screen").show();
  // show final score (from instructor)
  finalScoreEl.innerHTML = timerEl.innerHTML;
  console.log(finalScoreEl);
  // hide questions section (from instructor)
  // questionsEl.className = "hide";
  $("#questions").hide();
}

function clockTick() {
  // update time (from instructor)

  // check if user ran out of time (from instructor)
}

function saveHighscore() {
  // get value of input box (from instructor)
  var userInitials = $("#initials").val();
  var userScore = finalScoreEl.innerHTML;
  // make sure value wasn't empty (from instructor)
  console.log(userInitials);
  console.log(userScore);

  // get saved scores from localstorage, or if not any, set to empty array (from instructor)
var scoreArray = [];
  // localStorage.getItem();
  // localStorage.setItem(userInitials, "something")

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
