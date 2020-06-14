/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';
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
let sortArr =  moviesArr.sort();
for (let i =0; i < sortArr.length; i++ ){
    let itemList = sortArr[i];
    let itemPage = document.querySelectorAll(".promo__interactive-item");
    itemPage[i].textContent = `${i+1+" "}` + itemList;
}





