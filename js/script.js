'use strict';

let amountOfFilms = +prompt("How many films have you watched?", "Number of films...");
const personalMovieDB = {
    count :  amountOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};



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

if (personalMovieDB.count < 10) {
    alert("Too few films have been watched");
} else if (personalMovieDB.count < 30) {
    alert("Typical viewer");
} else if (personalMovieDB.count >= 30) {
    alert("You are moviegoer!");
} else {
    alert("Error!");
}


console.log(personalMovieDB.movies);