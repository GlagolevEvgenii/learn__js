/* Задание на урок:


2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/
'use strict';

let numberOfFilms

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    while (numberOfFilms === '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}
// start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function showMyDB() {
    if (personalMovieDB.privat === false) {
        console.log(personalMovieDB)
    }
}
showMyDB();

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        let answer = prompt('Ваш любимый жанр под номером', '');
        personalMovieDB.genres.push(answer);
    }
}
writeYourGenres();

function rememberMyFilms() {
    for(let i = 0; i < 2; i++){
        let   a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько оцените его?', '');
        console.log(a);
        console.log(b);
        if( a != null && b != null && a !== '' && b !== '' && a.length < 50 ){
            personalMovieDB.movies[a] = b;
        }else {
            --i;
        }
    }
}
//rememberMyFilms();

function detectPersonalLevel() {
    if(+personalMovieDB.count < 10){
        alert("Просмотрено довольно мало фильмов");
    }else if(+personalMovieDB.count > 10 && + +personalMovieDB.count < 30){
        alert("Вы классический зритель");
    }else if(+personalMovieDB.count > 30){
        alert("Вы киноман");
    }else{
        alert("Произошла ошибка");
    }
}

//detectPersonalLevel();





