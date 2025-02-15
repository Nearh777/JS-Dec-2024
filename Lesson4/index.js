'use strict';

//#I2XsG6f
//4.1 - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

//function squareOfRectangle(a, b) {

//    return  a * b;
// }
//
// squareOfRectangle(7, 8);


// #ETGAxbEn8l
//4.2 - створити функцію яка обчислює та повертає площу кола з радіусом r


//function squareCircle(r) {
//     return Math.PI * Math.pow(r, 2);
//
//  }
//
//  squareCircle(2);

//#Mbiz5K4yFe7
//4.3 - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function squareCylinder(r, h) {
//
//     return 2 * Math.PI * r * (h + r);
// }
//
// squareCylinder(3, 5);

// #SIdMd0hQ
//4.4 - створити функцію яка приймає масив та виводить кожен його елемент

//  function outputsArray(arr) {
//
//      for (const arrElement of arr) {
//
//            console.log(arrElement);
//        }
//    }
//
//
//    outputsArray([1, 5, 7, 8, 9]);

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
//Зроблено за допомогою відеорозв'язку

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

//function arrayMinNumber(arr) {
//     let min = arr[0];
//     for (let i = 0; i < arr.length; i += 1){
//         let number = arr[i];
//         if(number < min) {
//             min = number;
//         }
//
//     }
//     return min;
// }
//
// document.write('Найменьше число в масиві дорівнює: ', arrayMinNumber([33, 45, -25, 123, 67, 89]));

//#EKRNVPM
//4.11 - створити функцію sum(arr) яка приймає масив чисел,
// сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

//function sum(arr) {
//     let result = 0;
//     for (let i = 0; i < arr.length; i += 1) {
//         result += arr[i];
//     }
//     return result;
// }
//
//
// console.log(sum([3, 3, 4, 5, 20, 5]));
//
// document.write('Сума чисел масиву дорівнює: ', sum([3, 3, 4, 5, 20, 5]));

//#kpsbSQCt2Lf
//4.12 - створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
//Зроблено за допомогою відеорозв'язку

//function swap(arr, index1, index2) {
//      let temp = arr[index1];
//      arr[index1] = arr[index2];
//      arr[index2] = temp;
//      return arr;
//  }
//
//  console.log(swap([11,22,33,44],0,1) );

//#mkGDenYnNjn
//4.13 - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400

//function exchange(sumUAH,currencyValues,exchangeCurrency) {
//     let chosenCurrency;
//     for (const item of currencyValues) {
// if(item.currency === exchangeCurrency) {
//     chosenCurrency = item;
// }
//     }
//
//     let result = sumUAH / chosenCurrency.value;
//
//     return result;
// }
//
// console.log(exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD'));