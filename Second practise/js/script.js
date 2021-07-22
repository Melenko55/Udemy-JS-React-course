/*




3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)



*/


'use strict';
document.addEventListener("DOMContentLoaded", (e) => {

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
        movieList = document.querySelectorAll(".promo__interactive-list")[0],
        btn = document.querySelector(".add button"),
        addForm = document.querySelector("form.add"),
        trashBins = document.querySelectorAll(".delete");
      
    const removeAdv = () => {
        document.querySelectorAll(".promo__adv img").forEach(element => {
            element.remove();
        });
    };

    const makeChanges = () => {
        poster.querySelector(".promo__genre").textContent = "Драма";
        poster.style.backgroundImage = 'url("img/bg.jpg")';
    };
    
    const sortArr = (arr) => {
        arr.sort();
    };

    /*1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
    новый фильм добавляется в список. Страница не должна перезагружаться.
    Новый фильм должен добавляться в movieDB.movies.
    Для получения доступа к значению input - обращаемся к нему как input.value;
    P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.*/
    addForm.addEventListener("submit", (e) => {
        e.preventDefault();

        //2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки
        let filmNaming = document.querySelector(".adding__input").value;
        if (filmNaming) {

            if (filmNaming.length > 21) {
                filmNaming = `${filmNaming.substr(0, 21)}...`;
            }

            //4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: "Добавляем любимый фильм"
            if (addForm.querySelector('[type="checkbox"]').checked) {
                console.log("Добавляем любимый фильм");
            }
            movieDB.movies.push(filmNaming);

            //5) Фильмы должны быть отсортированы по алфавиту 
            sortArr(movieDB.movies);
            createMovieList(movieList, movieDB.movies);
        }

    e.target.reset();    
    });
    
    const createMovieList = (parent, films) => {
        parent.innerHTML = "";
    
        sortArr(films);
        
        films.forEach((film, index) => {
            
            parent.innerHTML += `
            <li class="promo__interactive-item">${index + 1} ${film}
            <div class="delete"></div>
            </li>`;
        });

        document.querySelectorAll(".delete").forEach((btn, i) => {
            btn.addEventListener("click", () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                createMovieList(parent, films);
            });
        });
    };
    
    
    
    removeAdv();
    makeChanges();
    createMovieList(movieList, movieDB.movies);
});


