'use strict';

//#sH8c4er
// 10.1 - Створити довільний елемент з id = text та створити кнопку.
// Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".


// let div = document.createElement('div');
// div.setAttribute('id', 'text');
// div.classList.add('box');
//
// let button = document.createElement('button');
// button.classList.add('button');
//
// document.body.append(div, button);
//
//
// const handleClick = () => {
//     div.classList.toggle('hidden');
//
// }
//
// button.addEventListener('click', handleClick);




// const buttons = document.getElementsByTagName('button');
// const button = buttons[0];
//
// button.onclick = function () {
//     document.getElementById('text').classList.toggle('hidden');
// }


//#j693ca8
// 10.2 - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

// let form = document.forms.f1;
//
// form.onsubmit = function (e) {
//     e.preventDefault();
//     if (this.userAge.value < 18) {
//
//        let p = document.createElement('p');
//        p.textContent = 'Warning Your Age < 18!!!';
//         document.body.appendChild(p);
//     } else {
//         let p = document.createElement('p');
//        p.textContent = 'Success!!!';
//         document.body.appendChild(p);
//     }


// }

//#ymAmN2xJ
// 10.3 - Стоврити форму з трьома полями для name,sruname,age та кнопкою.
// При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ.
// Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом

// const sendForm = document.querySelector('.form');
//
// sendForm.addEventListener('submit', handleSubmit);
//
// function handleSubmit(e) {
//     e.preventDefault();
//     const form = e.target;
//     const name = form.elements.name.value;
//     const surname = form.elements.surname.value;
//     const age = form.elements.age.value;
//
//     if (name === "" || surname === "" || age === "") {
//                let p = document.createElement('p');
//        p.textContent = 'Please fill in all the fields!';
//         return (document.body.appendChild(p));
//     }
//     let p = document.createElement('p');
//     p.textContent = `UserName: ${name}, Surname: ${surname}, Age: ${age}`;
//     document.body.appendChild(p);
//     form.reset();
//
// }

// #2VaLt4vDczH
// 10.4 -  є сторінка, на якій є блок, я кому знаходиьтся цифра.
// написати код, який при кожному перезавантажені сторінки буде додавати до неї +1



// let counter = +localStorage.getItem('number');
// counter += 1;
// localStorage.setItem('number', counter);
// document.getElementById('counter-title').textContent = counter;



// #LhSfdhM3
// 10.5 - Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще,
// в масив sessionsList зберігається інформація про дату та час відвідування сторінки.
// Є  сторінка sessionsListPage.html (назва довільна), при відвідуванні якої потрібно відмалювати всю
// інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а малювати в DOM


// let sessionsList = JSON.parse(localStorage.getItem('sessionsList')) || [];
//
//     sessionsList.push(new Date());
//
//     localStorage.setItem('sessionsList', JSON.stringify(sessionsList));


// #Jg0gPO00
// 10.6 - створити конвертор ваги з кг в фунти.
// данні заповнюються через інпут.
// При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок


// document.addEventListener('keydown', handleKeyDown);
//
// function handleKeyDown (e) {
//     console.log(+e.key * 2.2);
//     let  converter = (+e.key * 2.2);
//     const div = document.createElement('div')
//     const input = document.querySelector('.input');
//     div.innerText = converter ;
//     document.body.appendChild(div);
//     onreset(' ');
//
//
// }









//#RbQGnH5DuC
// В localStorage зберігаються масиви. Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage та додає в нього об'єкт
// сигнатура функції -
// addToLocalStorage(arrayName:string,objToAdd:any{}):void
//
//
// #kUSgFqWY
//  Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
//
//
// #bq1zkx7WP
// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//  зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//  При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається
//
//
// #NKB0tgWIK1G
// ***PAGINATION
// зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
// При натисканні next виводяться наступні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів