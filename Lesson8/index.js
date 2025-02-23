'use strict';



//#AiN5CoUQ
// 8.1 - Створити функцію, яка робить глибоку копію об'єкту.
// Додати перевірки на undefined, null, NaN.
// Подумати і реалізувати логіку, в якій кінцевий об'єкт буде мати функції,які в нього були до цього моменту.




const user = {
    id: 1,
    name: 'petya',
    surname: 'stronov',
    skills: ['html', 'js', 'node.js'],
    foo() {},
    greeting() {}
}


function copyObjFun(obj) {
    let functions = [];
    for (const key in obj) {
        if (typeof obj[key] === 'function') {
            const functionCopy = obj[key].bind({});
            functions.push({functionCopy, key});
        }
    }

if (obj) {
    const copyObj = JSON.parse(JSON.stringify(obj));
    for (const func of functions) {
        copyObj[func.key] = func.functionCopy;
    }

    return  copyObj;
}
    throw new Error('Помилка!');

}


console.log(copyObjFun(user));



//#iz6emEsP2BA
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

//за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration
//     Зробити все ВИКЛЮЧНО за допомоги інлайн конструкції

