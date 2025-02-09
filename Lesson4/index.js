'use strict';

//#I2XsG6f
//4.1 - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

//function squareOfRectangle(a, b) {
// const result = a * b;
//    return  console.log(`Площа прямокутника дорівнює S = ${result}`);
// }
//
// squareOfRectangle(7, 8);


// #ETGAxbEn8l
//4.2 - створити функцію яка обчислює та повертає площу кола з радіусом r


//function squareCircle(r) {
//     const result = Math.PI * Math.pow(r, 2)
//     return console.log(`Площа кола дорівнює S = ${result}`);
// }
//
//
// squareCircle(2);

//#Mbiz5K4yFe7
//4.3 - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function squareCylinder(r, h) {
//     const result = 2 * Math.PI * r * (h + r);
//     return console.log(`Площа кола дорівнює S = ${result}`);
// }
//
// squareCylinder(3, 5);

// #SIdMd0hQ
//4.4 - створити функцію яка приймає масив та виводить кожен його елемент

//function outputsArray(arr) {
//
//   for (const arrElement of arr) {
//
//         console.log(arrElement);
//     }
// }
//
//
// outputsArray([1, 5, 7, 8, 9]);

//#59g0IsA
//4.5 - створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент

//function outputText(text) {
//     return document.write(`<p>${text}`)
// }
//
// outputText('Lorem ipsum dolor sit amet.');

//#hOL6126
// 4.6- створити функцію яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий


//function outputList(text) {
// return document.write(`<ul>
// <li>${text}</li>
// <li>${text}</li>
// <li>${text}</li>
// </ul>`)
// }
//
// outputList('lorem home!');


//#0Kxco1edSN
//4.7 - створити функцію яка створює ul з  елементами li.
// Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write

//function outputList(text, quantity) {
//     document.write(`<ul>`);
//     for (let i = 1; i <= quantity; i += 1) {
//        document.write(`<li>${text}</li>`);
//     }
//     document.write(`</ul>`);
//
// }
//
// outputList('Hello!', 15);


//#gEFoxMMO
// 4.8- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві),
// та будує для них список (ul li) та виводить його через document.write

//function arrayItem(arr) {
//     document.write(`<ul>`);
//     for (let i = 0; i < arr.length; i += 1) {
//         document.write(`<li>${arr[i]}</li>`);
//     }
//
//     document.write(`</ul>`);
// }
//
// arrayItem([1, 'hello!', true, 234, 'milk', false, 546, 'tomato']);

//#bovDJDTIjt
//4.9 - створити функцію яка приймає масив об'єктів з наступними полями id,name,age
// та виводить їх в документ. Для кожного об'єкту окремий блок.

//function objectItem(object) {
//     document.write(`<ul>`);
//     for (const item of object) {
//         document.write(`<li>${item.id} ${item.name} ${item.age}</li>`)
//     }
//     document.write(`</ul>`);
// }
//
// let users = [
//     {
//         id: 1,
//         name: 'Serhii',
//         age: 45
//     },
//     {
//         id: 2,
//         name: 'Jon',
//         age: 25
//     },
//     {
//         id: 3,
//         name: 'Volodimir',
//         age: 35
//     },
//
// ];
//
// objectItem(users);

//#pghbnSB
//4.10 - створити функцію яка повертає найменьше число з масиву

