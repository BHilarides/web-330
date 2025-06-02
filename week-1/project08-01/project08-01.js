"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-01

      Project to create a timer object
      Author: Ben Hilarides
      Date:   6.1.25

      Filename: project08-01.js
*/

/*--------------- Object Code --------------------*/
// Constructor function for the timer object
function timer(min, sec) {
  timer.minutes = min;
  timer.seconds = sec;
  timer.timeId = null;
}

// Runpause method for timer object
timer.prototype.runPause = function(timer, minBox, secBox) {
  if (timer.timeID) {

    // If timer is running, pause it
    window.clearInterval(timer.timeID);
    timer.timeID = null;
  } else {

    // If timer is paused, start it
    timer.timeID = window.setInterval(function () {
      countdown(timer, minBox, secBox);
    }, 1000);
  }
};

function countdown(timer, minBox, secBox) {
  if (timer.seconds > 0) {
    timer.seconds -= 1;
  } else if (timer.minutes > 0) {
    timer.minutes -= 1;
    timer.seconds = 59;
  } else {
    // When timer reaches 0:0, stop timer
    window.clearInterval(timer.timeID);
    timer.timeID = null;
  }
  // Update the timer display
  timer.minutes = minBox.value;
  timer.seconds = secBox.value;
}



/*---------------Interface Code -----------------*/

/* Interface Objects */
let minBox = document.getElementById("minutesBox");
let secBox = document.getElementById("secondsBox");
let runPauseTimer = document.getElementById("runPauseButton");

// Creating timer object
myTimer = new timer(parseInt(minBox.value,10), parseInt(secBox.value, 10));

// Event handlers for min/sec
minBox.onChange = function() {
  myTimer.minutes = parseInt(minBox.value, 10);
};

secBox.onChange = function() {
  myTimer.seconds = parseInt(minBox.value, 10);
};

// Event handler for runPauseTimer button
runPauseTimer.onclick = function() {
  myTimer.runPause(myTimer, minBox, secBox);
};