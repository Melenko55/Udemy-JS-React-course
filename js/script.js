'use strict';

let amountOfFilms;


function start() {
    amountOfFilms = +prompt("How many films have you watched?", "Number of films...");
    while (amountOfFilms == null || amountOfFilms == '' || isNaN(amountOfFilms)) {
        amountOfFilms = +prompt("How many films have you watched?", "Number of films...");
    }
}

start();

const personalMovieDB = {
    count :  amountOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};

function rememberMyFilms() {
    for (let i = 0;  i < 2; i++) {

        let film = prompt("Last watched film?", "");
        while (film == '' || film == null || film.length > 50) {
            film = prompt("Last watched film?", "");
        }
    
        let rate = prompt("Personal assessment?", "");
        while (rate == '' || rate == null || rate.length > 50) {
            rate = prompt("Personal assessment?", "");
        }
    
        personalMovieDB.movies[film] = rate;
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert("Too few films have been watched");
    } else if (personalMovieDB.count < 30) {
        alert("Typical viewer");
    } else if (personalMovieDB.count >= 30) {
        alert("You are moviegoer!");
    } else {
        alert("Error!");
    }
}

detectPersonalLevel();


function showMyDB() {
    if (!personalMovieDB.privat) {
        console.log(personalMovieDB);
    }
}

showMyDB();

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        let genre = prompt(`Your favourite movie genre ${i}: `);
        personalMovieDB.genres[i - 1] = genre;
    }
}

writeYourGenres();