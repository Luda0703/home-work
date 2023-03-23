// "use strikt"

/////////TASK-1 (ПЕРЕМЕННЫЕ)//////////////

// const userName = "Вася";

// const user = userName;

// console.log(user)


////////TASK-2 (ТИПЫ ДАННЫХ)///////////////

// Вариант-1

// let userAge = 36;
// let userInfo = `Фрилансер ${userAge}`;
// console.log(userInfo)

// Вариант-2

// let userHeight = 145 / 0;
// console.log(userHeight)
// // вернется значение Infinity

// Вариант-3

// let userName;
// console.log(typeof userName);
// // вернется значение Undefined

// Вариант-4

// let userSize = "45" / "8";
// console.log(typeof userSize)
// // вернет значение Number


///////// TASK-03 (операторы) //////////

// console.log('35' + '22'); //// 3522
// console.log('35' * '22'); //// 770
// console.log('558' > 22++);  //// ошибка


// let userCounter = 0;
// let newUser = userCounter++;
// console.log(newUser);
////  вернет 0


// console.log(!false && 11 || 18 && !''); // вернет 11

// let name = 0;
// console.log(name ?? "без имени")
// // вернет 0

///////// TASK-3 (if, else) /////////////

// if (1 === '1') {
//     console.log('Истина!');
// } else {
//     console.log('Ложь!')
// }
//// 'Ложь!' /////

// if (5 == '5') {
//     console.log('Истина!');
// } else {
//     console.log('Ложь!')
// }
//// 'Истина!' ////

// let message = (92 > '11' && 58 < 100) ? 'Истина!' : 'Ложь!';
// console.log(message)
////  'Истина!' ////

// if (0) {
//     console.log('Ложь!');
// } else if (' ') {
//     console.log('Истина!');
// }
////  'Истина!' ////

///////// TASK-4 (while, do.. while, for) /////////

// WHILE - Проверяет условие перед каждой итерацией.
// DO.. WHILE - Проверяет условие после каждой итерации.
// FOR - Проверяет условие перед каждой итерацией,  
// есть возможность задать дополнительные настройкию.

// Чтобы организовать бесконечный цикл, используют 
// конструкцию while (true).
// При этом он, как и любой другой цикл, может быть
// прерван директивой break.

// Если на данной итерации цикла делать больше 
// ничего не надо, но полностью прекращать цикл не следует
// - используют директиву continue.

// let num = 0
// while (num < 5) {
//     console.log(num);
//     num++;
//     // выведет от 0 до 4
// }


// let num = 5
// while (num) {
//     console.log(num);
//     num--;
//     // выводит от 5 до 1
// }


// let num = 0
// do {
//     console.log(num);
//     num++;
// } while (num <5);
//// выведет от 0 до 4


// for (let num = 0; num < 5; num++) {
//     console.log(num);
// } // вывудет от 0 до 4


// let num = 0
// for (; num < 5; num++) {
//     console.log(num);
//     if (num == 2) break;
// }
// console.log(`Робота окончена, num = ${num}`);
// // `Робота окончена, num = 2`


// let num = 0
// for (; num < 5; num++) {
//     if (num < 2) continue;
//     console.log(num);
// } // выводит 2, 3, 4


// let num = 8
// while(num) {
//     console.log(num);
//     num--
//     // выводит с 8 до 1
// }


// for (let num = 0; num < 3; num++) {
//     console.log(`Число; ${num}`);
// } // выводит, `Число; 0, 1, 2`


// for (let num = 0; num < 2; num++) {
//     for(let size = 0; size < 3; size++) {
//         console.log(size);
//     }
// } // выводит с 0 до 2 два раза


/////////// TASK-5 (function) ///////////////

// Задача №1
// Кто попадает в консоль первым Вася или Коля?

// function showName() {
//     console.log('Вася!');
// }
// setTimeout(showName, 0);
// console.log('Коля!')
// // Коля

// Задача №2
// Верно ли вызвана функция?

// showMassage();
// function showMassage() {
//     console.log('Сообщене');
// } // Да

// Задача №3
// Верно ли вызвана функция?

// showMassage();
// let showMassage = function () {
//     console.log('Сообщене');
// } // нет, нужно вызывать showMassage() после функции

//Задача №4
// как разрулить проблему?

// 'use strict'

// let showMassage
// if (2 > 1) {
//     showMassage = function () {
//         console.log('Сообщене');
//     }
// }
// showMassage()
// //// в таких выражения нужно обьявлять переменную до функции


///////////// TASK-6 (обьекты) ////////////////////

// Залача №1 (что будет выведено в консоль?)

// let userInfo = {
//     name: 'Вася',
//     age: 30,
//     "58": 'Значение свойства',
// }
// console.log(userInfo[58]);
// //// 'Значение свойства'

//Задача №2 (что будет выведено в консоль?)

// let userInfo = {
//     name: 'Вася',
//     age: 30,
// }
// let user = userInfo;
// user.age = 45;
// console.log(userInfo.age) //45

// Задача №3 (что будет выведено в консоль?)

// let userInfo = {
//     name: 'Вася',
//     age: 30,
//     showInfo() {
//         console.log(`${this.name}`);
//     }
// }
// let user = userInfo;
// userInfo = null;
// user.showInfo()
// //// Вася

// Зарача №4  (что будет выведено в консоль?)

// let userInfo = {
//     name: 'Вася',
//     age: 30,
// }
// for (const key in userInfo) {
//     const value = userInfo[key];
//     console.log(value);
// }
// //// Вася, 30

// Задача №6  (что будет выведено в консоль?)

// let userInfo = {
//     name: 'Вася',
//     age: 30,
//     address: {
//         city: "Uzhhorod"
//     }
// }
// for (const key in userInfo.address) {
//     console.log(userInfo.address[key]);
// }
/////  "Uzhhorod"

// Задача №7 (верна ли запись?)

let userInfo = {
    name: 'Вася',
    age: 30,
    "likes js": true
}
console.log(userInfo["likes js"])
