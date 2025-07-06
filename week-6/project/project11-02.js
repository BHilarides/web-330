"use strict";
/*    JavaScript 7th Edition
      Chapter 11
      Project 11-02

      Project to city and state information from a provided postal code
      Author: Ben Hilarides
      Date:   7.6.25

      Filename: project11-02.js
*/

let postalCode = document.getElementById("postalCode");
let place = document.getElementById("place");
let region = document.getElementById("region");
let country = document.getElementById("country");

postalCode.onblur = function() {
  let codeValue = postalCode.value;
  let countryValue = country.value;

  // Set the value of place and region to empty strings
  place.value = "";
  region.value = "";

  let apiURL = "http://api.zippopotam.us/" + countryValue + "/" + codeValue;

  fetch(apiURL)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Unable to retrieve location data");
      }
    })
    .then(json => {
      place.value = json.places[0]["place name"];
      region.value = json.places[0]["state abbreviation"];
    })
    .catch(error => {
      console.error("Fetch error:" + error.message);
    });
}