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



/*---------------Interface Code -----------------*/

/* Interface Objects */
let minBox = document.getElementById("minutesBox");
let secBox = document.getElementById("secondsBox");
let runPauseTimer = document.getElementById("runPauseButton");

