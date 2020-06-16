/* Задания на урок:



3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)



 */

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
const button = document.querySelector("button"),
    checkBox = document.querySelector("[type='checkbox']"),
    list = document.querySelector(".promo__interactive-list"),
    input =  document.querySelector(".adding__input") ;
list.innerHTML = "";
console.log(moviesArr);
button.addEventListener('click',function (e) {
    e.preventDefault();
    let answer = input.value;
    if(checkBox.checked ){
        console.log("Добавляем любимый фильм");
    } if( answer.length > 21){
        let shortAnswer = answer.slice(0,20) + "...";
        moviesArr.push(shortAnswer);
    }else{
        moviesArr.push(answer);
    }
    sortArr =  moviesArr.sort();
    list.innerHTML = "";
    sortArr.forEach(function (item,i) {
        let list = document.querySelector(".promo__interactive-list");
        list.innerHTML += `<li class="promo__interactive-item">${i+1} ${item}<div class="delete"></div></li>`;
    });
});

sortArr.forEach(function (item,i) {
    list.innerHTML += `<li class="promo__interactive-item">${i+1} ${item}<div class="delete"></div></li>`;
});







