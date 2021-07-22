'use strict';

let amountOfFilms;





const personalMovieDB = {
    count :  0,
    movies : {},
    actors : {},
    genres : [],
    privat : false,
    start: function() {
        personalMovieDB.count = +prompt("How many films have you watched?", "Number of films...");
        while (personalMovieDB.count == null || personalMovieDB.count == '' || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("How many films have you watched?", "Number of films...");
        }
    },
    rememberMyFilms: function() {
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
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            alert("Too few films have been watched");
        } else if (personalMovieDB.count < 30) {
            alert("Typical viewer");
        } else if (personalMovieDB.count >= 30) {
            alert("You are moviegoer!");
        } else {
            alert("Error!");
        }
    },
    showMyDB: function() {
        if (!personalMovieDB.privat) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function() {
        
        for (let i = 1; i < 2; i++) {
            let genres = prompt(`Your favourite movie genres divided ny semilicon:`);
            if (genres == null || genres == '') {
                console.log("Incorrect options");
                i--;
            } else {
                personalMovieDB.genres = genres.split(", ");
            }
            
        }

            /*
            -----------------------Alternative-------------------------------
            for (let i = 1; i <= 3; i++) {
                let genre = prompt(`Your favourite movie genre ${i}: `);
                while (genre == null || genre == '') {
                    genre = prompt(`Your favourite movie genre ${i}: `);
                }
                personalMovieDB.genres[i - 1] = genre;`
            }
            */
        personalMovieDB.genres.forEach((genre, i) => console.log(`Favourite genre #${i + 1} is ${genre}`));

    },
    toggleVisibleMyDB: function() {
        personalMovieDB.privat = !personalMovieDB.privat;
    }
};

personalMovieDB.writeYourGenres();