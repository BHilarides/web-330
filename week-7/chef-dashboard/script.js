/*
  Pragmatic JavaScript
  Chapter 3
  Programming Assignment

  Author: Ben Hilarides
  Date: 7.13.25
  Filename: chefs.js
*/

"use strict";

let chefs = [
  {
    name: "Jimmy John",
    specialty: "Sandwiches",
    weakness: "Desserts",
    restaurantLocation: "Miami"
  },
  {
    name: "Pepe Le Peu",
    specialty: "French Cuisine",
    weakness: "Spicy Food",
    restaurantLocation: "New Orleans"
  },
  {
    name: "Zoey Bansal",
    specialty: "Indian Cuisine",
    weakness: "Seafood",
    restaurantLocation: "San Francisco"
  }
];

function retrieveChef1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.9) {
        resolve(chefs[0]);
      } else {
        reject("Error: Failed to retrieve Chef 1's information.");
      }
    }, 2000);
  });
}

function retrieveChef2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.9) {
        resolve(chefs[1]);
      } else {
        reject("Error: Failed to retrieve Chef 2's information.");
      }
    }, 3000);
  })
}

function retrieveChef3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.9) {
        resolve(chefs[2]);
      } else {
        reject("Error: Failed to retrieve Chef 3's information.");
      }
    }, 4000);
  });
}

function displayChefData(index, chef) {
  const container = document.getElementById(`chef${index}`);
  container.innerHTML = `
    <h3>${chef.name}</h3>
    <p><strong>Specialty:</strong> ${chef.specialty}</p>
    <p><strong>Weakness:</strong> ${chef.weakness}</p>
    <p><strong>Restaurant Location:</strong> ${chef.restaurantLocation}</p>
  `;
}

function displayError(message) {
  const container = document.getElementById(`chef${index}`);
  container.innerHTML = `<p class="error">${message}</p>`;
}

Promise.allSettled([retrieveChef1(), retrieveChef2(), retrieveChef3()])
  .then(results => {
    results.forEach((result, index) => {
      if (result.status === 'fulfilled') {
        displayChefData(index + 1, result.value);
      } else {
        displayError(index + 1, result.reason);
      }
    });
  })
  .catch(error => {
    console.error("Unexpected error:", error);
  });