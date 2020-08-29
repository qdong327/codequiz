// Behavior: Upon click, timer counts down, but if clicked twice, countdown goes twice as fast. Hits negative numbers.
timerId = setInterval(function () {
    var secondsLeft = currentTime--;
    timerEl.textContent = (secondsLeft);
    console.log(secondsLeft);

    // QD: clearing interval below currently does not work, numbers hit negative
    if (currentTime === 0) {
        clearInterval();
        timerEl.textContent = 0;
    }
}, 1000);

startBtn.addEventListener('click', startQuiz);
