/*
  Pragmatic JavaScript
  Chapter 1
  Programming Assignment

  Author: Ben Hilarides
  Date: 6.7.25
  Filename: script.js
*/

"use strict";

function createCharacter(name, gender, charClass) {
  return {
    getName: function() {
      return name;
    },
    getGender: function () {
      return gender;
    },
    getCharClass: function () {
      return characterClass;
    }
  };
}

document.getElementById("generateHero").addEventListener("click", function(e) {
  e.preventDefault();

  const name = document.getElementById("heroName").value.trim();
  const gender = document.getElementById("heroGender").value;
  const charClass = document.getElementById("heroClass").value;
  const output = document.getElementById("characterOutput");

  if (name && gender && charClass) )

  // TODO: Create character

  // TODO: Display character information
});