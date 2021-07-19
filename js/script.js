'use strict';

let amountOfFilms = prompt("How many films have you watched?", "Number of films...");
const personalMovieDB = {
    count :  amountOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};

let film = prompt("Last watched film?", "");
let rate = prompt("Personal assessment?", "");
personalMovieDB.movies[film] = rate;

film = prompt("Last watched film?", "");
rate = prompt("Personal assessment?", "");
personalMovieDB.movies[film] = rate;

console.log(personalMovieDB.movies);