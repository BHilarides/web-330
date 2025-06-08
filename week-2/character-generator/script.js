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
      return charClass;
    }
  };
}

document.getElementById("generateHero").addEventListener("click", function(e) {
  e.preventDefault();

  const name = document.getElementById("heroName").value.trim();
  const gender = document.getElementById("heroGender").value;
  const charClass = document.getElementById("heroClass").value;
  const output = document.getElementById("characterOutput");

  if (name && gender && charClass) {
    const newHero = createCharacter(name, gender, charClass);

    output.innerHTML = `
    <h2>Your Character</h2>
    <p>Name: ${newHero.getName()}</p>
    <p>Gender: ${newHero.getGender()}</p>
    <p>Class: ${newHero.getCharClass()}</p>
    `;

    }  else {
      output.innerHTML = `
      <p>Please complete all fields to create your character.</p>`;
    }
});