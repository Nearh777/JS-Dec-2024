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

// const box = document.querySelector('.box');
const boxCount = document.getElementById('box-count');

let count = 0;

 boxCount.addEventListener('load', counterFunc);

function counterFunc () {
    count += 1;
    localStorage.setItem('counter', JSON.stringify(count));
    let counterLoc = JSON.parse(localStorage.getItem('counter'))
   return boxCount.textContent = counterLoc;
}


// boxCount.onload = function () {
//         count += 1;
//         localStorage.setItem('counter', JSON.stringify(count));
//      boxCount.textContent = count;
//      console.log(count);
// }











