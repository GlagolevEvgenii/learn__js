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
//weeks();
let array = ["333", "546456", "9454", "775", "23423", "56765", "34543"];
array.forEach(function (item, i) {
    if(+array[i][0] === 3 || +array[i][0] === 7){
        //console.log( array[i]);
    }
});

//У вас также есть массив arr = [20, 33, 1, “Человек”, 2, 3].
// Выведите в консоль квадратный корень из суммы кубов его элементов (Да, человека нужно исключить)
//Создайте функцию, которая принимает 1 аргумент.
// (название произвольное) Если передана не строка - функция оповещает об этом пользователя.
//В полученной (как аргумент) строке функция должна убрать все пробелы в начале и в конце.
// Если строка более 50 знаков - то после 50го символа часть текста скрывается и вместо них появляются три точки (...)
const str = "урок-3-был слишком легким";
let strNew = str[0].toUpperCase()+ str.slice(1);
strNew = strNew.split("-").join(" ");
let strWord = strNew.slice(strNew.length - 6);
let strFinish = strWord.slice(0,4) + "o";
//console.log( strNew);
//alert(strFinish);


const arrNew = [20, 33, 1, "Человек", 2, 3];
let arrSort = arrNew.filter(Number);
arrSort.forEach(function (item,index) {
     Math.sqrt(item**3);
    console.log(Math.sqrt(item**3));
});

console.log(arrSort);
function test(a) {
    console.log(typeof (a) == "string");
    if(typeof (a) === "string" ){
        let notEmpty =  a.replace("  ","");
        console.log(notEmpty);
        alert(" вы вводите строку" + notEmpty);
    }if(a.length > 50){
        alert("длинная строка");
        a[a.length + 1] = "...";
    }
}
test("fdhdfhdfh rbrt rtgtbrt");



