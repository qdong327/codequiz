var clearButton = document.querySelector("#clear");

function printHighscores() {
  // either get scores from localstorage or set to empty array (from instructor)
  var highScores = JSON.parse(window.localStorage.getItem("highScores")) || [];
  // (optional) sort highscores by score property in descending order (from instructor)

  // Testing array = [a, b, c, d, e, f, g]
  // var highScores = [
  //  {
  //     score: 12,
  //     initials: "test"
  //   }, {
  //     score: 8,
  //     initials: "test"
  //   }, {
  //     score: 100,
  //     initials: "test"
  //   }, {
  //     score: 2,
  //     initials: "test"
  //   }, {
  //     score: 50,
  //     initials: "test"
  //   },
  // ]
  highScores.sort(function (a, b) {
    return b.score - a.score;
  }
  );
  console.log(highScores)

  // for each score (from instructor)

  for (i = 0; i < highScores.length; i++) {
    var gottenInitials = highScores[i].initials;
    var gottenScore = highScores[i].score;
    console.log(liEl);
    // create li tag for each high score (from instructor)
    var liEl = document.createElement("li")
    liEl.innerHTML = (gottenInitials + " - " + gottenScore);
    // display on page (from instructor)
    var olEl = document.getElementById("highscores");
    olEl.append(liEl);
  }

}

function clearHighscores() {
  // (and reload) (from instructor)
  console.log(clearButton);
  window.localStorage.clear();
  window.location.href = "highscores.html";
}
clearButton.onclick = clearHighscores;


// attache clear event to clear score button (from instructor)

// run printhighscore when page loads (from instructor)
printHighscores();