/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку.
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены -
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/
'use strict';

let numberOfFilms;
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start:function start() {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
        while (numberOfFilms === '' || numberOfFilms == null || isNaN(numberOfFilms)){
            numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    toggleVisibleMyDB:function toggleVisibleMyDB(){
        if (personalMovieDB.privat === false) {
            personalMovieDB.privat = true;
        }
    },
    showMyDB:function showMyDB() {
        if (personalMovieDB.privat === false) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres:function writeYourGenres() {
        for (let i = 0; i < 3; i++) {
            let answer = prompt('Ваш любимый жанр под номером'+ "" + (i + 1), '');
            console.log(typeof i);
            if( answer != null && answer !== '' ){
                personalMovieDB.genres.push(answer);
            }else {
                i--;
            }
            personalMovieDB.genres.forEach(function(item, i) {
                console.log(`Любимый жанр ${i} - это ${item}.`);
            });
        }
    },
    rememberMyFilms:function rememberMyFilms() {
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
    },
    detectPersonalLevel:function detectPersonalLevel() {
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
};
// start();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();
personalMovieDB.writeYourGenres();
//rememberMyFilms();
//detectPersonalLevel();





