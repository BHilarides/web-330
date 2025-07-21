/*
  Pragmatic JavaScript
  Chapter 4
  Programming Assignment

  Author: Ben Hilarides
  Date: 7.20.25
  Filename: script.js
*/

"use strict";

const movies = [
  {
    title: "The Matrix",
    year: 1999,
    director: "The Wachowskis",
    synopsis: "A hacker discovers the world is a simulation and joins a rebellion against the machines."
  },
  {
    title: "Inception",
    year: 2010,
    director: "Christopher Nolan",
    synopsis: "A thief who enters people's dreams to steal secrets is given a chance to erase his criminal record by planting an idea in a target's mind."
  },
  {
    title: "Interstellar",
    year: 2014,
    director: "Christopher Nolan",
    synopsis: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival."
  },
  {
    title: "The Godfather",
    year: 1972,
    director: "Francis Ford Coppola",
    synopsis: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son."
  },
  {
    title: "Pulp Fiction",
    year: 1994,
    director: "Quentin Tarantino",
    synopsis: "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption."
  },
  {
    title: "The Dark Knight",
    year: 2008,
    director: "Christopher Nolan",
    synopsis: "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice."
  },
  {
    title: "Forrest Gump",
    year: 1994,
    director: "Robert Zemeckis",
    synopsis: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama"
  }
];

function fetchMovie(title) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const movie = movies.find(
        (m) => m.title.toLowerCase() === title.toLowerCase().trim()
      );
      if (movie) {
        resolve(movie);
      } else {
        reject(new Error("Movie not found, please try another title."));
      }
    }, 1000); // Simulate network delay
  });
}

document.getElementById("movie-form").addEventListener("submit", async (event) => {
  event.preventDefault();

  const titleInput = document.getElementById("title-input").value;
  const titleDisplay = document.getElementById("movie-title");
  const directordisplay = document.getElementById("movie-director");
  const yearDisplay = document.getElementById("movie-year");
  const synopsisDisplay = document.getElementById("movie-synopsis");
  const errorMessage = document.getElementById("error-message");

  titleDisplay.textContent = "";
  directordisplay.textContent = "";
  yearDisplay.textContent = "";
  synopsisDisplay.textContent = "";
  errorMessage.textContent = "";

  try {
    const movie = await fetchMovie(titleInput);

    titleDisplay.textContent = `Title: ${movie.title}`;
    directordisplay.textContent = `Director: ${movie.director}`;
    yearDisplay.textContent = `Year: ${movie.year}`;
    synopsisDisplay.textContent = `Synopsis: ${movie.synopsis}`;
  } catch (error) {
    errorMessage.textContent = error;
  }
});