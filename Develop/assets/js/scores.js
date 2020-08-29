var clearButton = document.querySelector("#clear");
// Print High Scores based on local storage
function printHighscores() {
  // either get scores from localstorage or set to empty array (from instructor)
  var highScores = JSON.parse(window.localStorage.getItem("highScores")) || [];
  // (optional) sort highscores by score property in descending order (from instructor)
  highScores.sort(function (a, b) {
    return b.score - a.score;
  }
  );
  // for each score (from instructor)
  for (i = 0; i < highScores.length; i++) {
    var gottenInitials = highScores[i].initials;
    var gottenScore = highScores[i].score;
    // create li tag for each high score (from instructor)
    var liEl = document.createElement("li")
    liEl.innerHTML = (gottenInitials + " - " + gottenScore);
    // display on page (from instructor)
    var olEl = document.getElementById("highscores");
    olEl.append(liEl);
  }
}
// Clear high scores when button is clicked
function clearHighscores() {
  window.localStorage.clear();
  // (and reload) (from instructor)
  window.location.href = "highscores.html";
}

// attache clear event to clear score button (from instructor)
clearButton.onclick = clearHighscores;

// run printhighscore when page loads (from instructor)
printHighscores();