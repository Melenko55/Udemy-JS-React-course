/* Задания на урок:





3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

*/

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const poster = document.querySelector(".promo__bg"),
    movieList = document.querySelectorAll(".promo__interactive-list")[0];

    
//1) Удалить все рекламные блоки со страницы (правая часть сайта)
document.querySelectorAll(".promo__adv img").forEach(element => {
    element.remove();
});


//2) Изменить жанр фильма, поменять "комедия" на "драма"
poster.querySelector(".promo__genre").textContent = "Драма";

//3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
poster.style.backgroundImage = 'url("img/bg.jpg")';


//4) Список фильмов на странице сформировать на основании данных из этого JS файла.
//Отсортировать их по алфавиту 
//5) Добавить нумерацию выведенных фильмов 
movieList.innerHTML = "";

movieDB.movies.sort();

movieDB.movies.forEach((film, index) => {
    
    movieList.innerHTML += `
    <li class="promo__interactive-item">${index + 1} ${film}
    <div class="delete"></div>
    </li>`;
});

console.log(movieList);


