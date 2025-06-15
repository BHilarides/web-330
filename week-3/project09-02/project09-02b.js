"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-01

      Project to read field values from session storage
      Author: Ben Hilarides
      Date:   6.15.25

      Filename: project09-02b.js
*/

/* Page Objects */

let riderName = document.getElementById("riderName");
let ageGroup = document.getElementById("ageGroup");
let bikeOption = document.getElementById("bikeOption");
let routeOption = document.getElementById("routeOption");
let accOption = document.getElementById("accOption");
let region = document.getElementById("region");
let miles = document.getElementById("miles");
let comments = document.getElementById("comments");

// Retrieve the data from session storage
window.onload = function() {
  var storedName = sessionStorage.getItem("riderName");
  var storedAge = sessionStorage.getItem("ageGroup");
  var storedBike = sessionStorage.getItem("bikeOption");
  var storedRoute = sessionStorage.getItem("routeOption");
  var storedAcc = sessionStorage.getItem("accOption");
  var storedRegion = sessionStorage.getItem("region");
  var storedMiles = sessionStorage.getItem("miles");
  var storedComments = sessionStorage.getItem("comments");

  if (storedName !== null) {
    var nameElement = document.getElementById("riderName");
    nameElement.textContent = storedName;
  }

  if (storedAge !== null) {
    var ageElement = document.getElementById("ageGroup");
    ageElement.textContent = storedAge;
  }

  if (storedBike !== null) {
    var bikeElement = document.getElementById("bikeOption");
    bikeElement.textContent = storedBike;
  }

  if (storedRoute !== null) {
    var routeElement = document.getElementById("routeOption");
    routeElement.textContent = storedRoute;
  }

  if (storedAcc !== null) {
    var accElement = document.getElementById("accOption");
    accElement.textContent = storedAcc;
  }

  if (storedRegion !== null) {
    var regionElement = document.getElementById("region");
    regionElement.textContent = storedRegion;
  }

  if (storedMiles !== null) {
    var milesElement = document.getElementById("miles");
    milesElement.textContent = storedMiles;
  }

  if (storedComments !== null) {
    var commentsElement = document.getElementById("comments");
    commentsElement.textContent = storedComments;
  }
}
