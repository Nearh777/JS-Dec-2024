
'use strict';

//Тут ті самі завдання, що і в занятті про базові функції, але зробити їх потрібно за допомоги стрілочних функцій
//
// #I2XsG6f
// 5.1 - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

//let squareOfRectangle = (a, b) => a * b;
//
// console.log(squareOfRectangle(2, 10));


// #ETGAxbEn8l
// 5.2 - створити функцію яка обчислює та повертає площу кола з радіусом r

//let squareCircle = (r) => Math.PI * Math.pow(r, 2);
//
// console.log(squareCircle(10));


// #Mbiz5K4yFe7
// 5.3 - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

//let squareCylinder = (r, h) => 2 * Math.PI * r * (h + r);
//
// console.log(squareCylinder(5, 10));


// #SIdMd0hQ
// 5.4 - створити функцію яка приймає масив та виводить кожен його елемент

//let outputsArray = (arr) => {
//     for (const arrElement of arr) {
//         console.log(arrElement);
//     }
// }
//
// outputsArray([1, 5, 7, 8, 9]);

// #59g0IsA
// 5.5 - створити функцію яка створює параграф з текстом. Текст задати через аргумент

//let outputText = (text) => document.write(`<p>${text}`);
//
// outputText('Okten!');


// #hOL6126
// 5.6 - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

//let outputList = (text) =>
//                 document.write(
//                     `<ul>
//                  <li>${text}</li>
//                  <li>${text}</li>
//                  <li>${text}</li>
//               </ul>`)
//
//
// outputList('Okten!');




// #0Kxco1edSN
// 5.7 - створити функцію яка створює ul з трьома елементами li.
// Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)


//let outputList = (text, quantity) =>
// {
//     document.write(`<ul>`);
//     for (let i = 1; i <= quantity; i += 1) {
//         document.write(`<li>${text}</li>`);
//     }
//     document.write(`</ul>`);
// }
//
//
//
// outputList('Okten!', 20);




// #gEFoxMMO
// 5.8 - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

//let arrayItem = (arr) =>
// {
//     document.write(`<ul>`);
//
//        for (let i = 0; i < arr.length; i += 1) {
//            document.write(`<li>${arr[i]}</li>`);
//        }
//
//        document.write(`</ul>`);
// }
//
// arrayItem([1, 'hello!', true, 234, 'milk', false, 546, 'tomato']);



// #bovDJDTIjt
// 5.9 - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

//let objectItem = (object) =>
// {
//          document.write(`<ul>`);
//        for (const item of object) {
//            document.write(`<li>${item.id} ${item.name} ${item.age}</li>`)
//        }
//        document.write(`</ul>`);
// }
//
//    let users = [
//        {
//            id: 1,
//            name: 'Serhii',
//            age: 45
//        },
//        {
//            id: 2,
//            name: 'Jon',
//            age: 25
//        },
//        {
//            id: 3,
//            name: 'Volodimir',
//            age: 35
//        },
//
//    ];
//
//    objectItem(users);




// #pghbnSB
// 5.10 - створити функцію яка повертає найменьше число з масиву

//let arrayMinNumber = (arr) =>
// {
//          let min = arr[0];
//        for (let i = 0; i < arr.length; i += 1){
//            let number = arr[i];
//            if(number < min) {
//                min = number;
//            }
//
//        }
//        return min;
// }
//
// document.write('Найменьше число в масиві дорівнює: ', arrayMinNumber([33, 45, -25, 123, 67, 89, -407]));



// #EKRNVPM
// 5.11 - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

//let sum = (arr) =>
// {
//          let result = 0;
//        for (let i = 0; i < arr.length; i += 1) {
//            result += arr[i];
//        }
//        return result;
// }
//
// console.log(sum([3, 3, 4, 5, 20, 5]));



// #kpsbSQCt2Lf
// 5.12 - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

//let swap = (arr, index1, index2) =>
// {
//           let temp = arr[index1];
//         arr[index1] = arr[index2];
//         arr[index2] = temp;
//         return arr;
// }
//
// console.log(swap([11,22,33,44],0,1) );



// #mkGDenYnNjn
// 5.13 - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

//let exchange = (sumUAH,currencyValues,exchangeCurrency) =>
// {
//          let chosenCurrency;
//        for (const item of currencyValues) {
//    if(item.currency === exchangeCurrency) {
//        chosenCurrency = item;
//    }
//        }
//
//        let result = sumUAH / chosenCurrency.value;
//
//        return result;
// }
//
// console.log(exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD'));