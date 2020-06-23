/* Задания на урок:



3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)



 */

'use strict';
document.addEventListener("DOMContentLoaded", () => {

    document.querySelector(".promo__adv").remove();
    document.querySelector(".promo__genre").textContent = "драма";
    document.querySelector(".promo__bg").style.background = "url(\"img/bg.jpg\") center center/cover no-repeat";

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    let moviesArr = movieDB.movies;
    //let sortArr =  moviesArr.sort();
    const form = document.querySelector(".add"),
        checkBox = document.querySelector("[type='checkbox']"),
        list = document.querySelector(".promo__interactive-list"),
        input = document.querySelector(".adding__input");
    console.log(moviesArr);
    const sortArr = (arr) => {
        arr.sort();
    };


    form.addEventListener('submit', function (event) {
        event.preventDefault();
        let answer = input.value;
        if (answer){
            if (answer.length > 21){
                answer = `${answer.substring(0,22)}...`;
            }
            if (checkBox.checked) {
                console.log("Добавляем любимый фильм");
            }
            movieDB.movies.push(answer);
            sortArr(movieDB.movies);
            createMovieList(movieDB.movies, list);
        }
         event.target.reset();
    });


    function createMovieList(films, parent) {
        parent.innerHTML = "";
        sortArr(films);
        films.forEach(function (item, i) {
            parent.innerHTML += `<li class="promo__interactive-item">${i + 1} ${item}<div class="delete"></div></li>`;
        });
        document.querySelectorAll(".delete").forEach((btn,i)=>{
            btn.addEventListener("click",()=>{
                btn.parentElement.remove();
                movieDB.movies.splice(i,1);
                createMovieList(films, parent);
            });
        });
    }

    createMovieList(movieDB.movies, list);

});






