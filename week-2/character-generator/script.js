/*
  Pragmatic JavaScript
  Chapter 1
  Programming Assignment

  Author: Ben Hilarides
  Date: 6.7.25
  Filename: script.js
*/

"use strict";

function createCharacter(name, gender, characterClass) {
  return {
    getName: function() {
      return name;
    },
    getGender: function () {
      return gender;
    },
    getCharacterClass: function () {
      return characterClass;
    }
  };
}

document.getElementById("generateHero").addEventListener("click", function(e) {
  e.preventDefault();

  // TODO: Get form values

  // TODO: Create character

  // TODO: Display character information
});