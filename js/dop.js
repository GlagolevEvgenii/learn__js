// Необходимо выполнить в отдельном js файле, подключенному к отдельной html странице.
//     Создайте переменную num со значением 33721. Выведите в консоль произведение (умножение) цифр этого числа.
//     Полученный результат возведите в степень 3, используя только 1 оператор.
//     Выведите его на экран первые две цифры полученного числа.


const num = 33721;
let arr = String(num).split("");
let multiplication = arr[0] * arr[1] * arr[2] * arr[3] * arr[4];
let result = multiplication ** 3;
let finish = String(result).slice(0, 2);
//console.log(+finish);

// Создайте массив week и запишите в него дни недели в виде строк (вручную).
//     Выведите на экран все дни недели, каждый из них с новой строчки, а выходные дни - жирным шрифтом.
//     Текущий день - курсивом (пока можно задать текущий день вручную, без работы с объектом даты)
//
// 2) Создайте массив arr = []. Запишите в него 7 многозначных цифр в виде строк. Выведите в консоль только те,
// что начинаются с цифры 3 или 7 (Должны присутствовать в массиве).
let week =["воскресенье","понедельник","вторник","среда","четверг","пятница","суббота"];
function weeks() {
    let date = new Date();
    let day = date.getDay();
    let today = week[day];
    week.forEach(function(item, i) {
        if ((week[i] === "суббота" || week[i] === "воскресенье") && week[i] !== today) {
            document.write("<strong>" + item + "</strong>" + "<br>");
        }else if( week[i] === today){
            document.write("<em>" + item + "</em>" + "<br>");
        }else{
            document.write(item + "<br>");
        }
    });
}
weeks();
let array = ["333", "546456", "9454", "775", "23423", "56765", "34543"];
array.forEach(function (item, i) {
    if(+array[i][0] === 3 || +array[i][0] === 7){
        console.log( array[i])
    }
});


