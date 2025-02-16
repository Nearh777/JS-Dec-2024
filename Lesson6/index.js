'use strict';

//#dFeorS3m7u
// 6.1 - Знайти та вивести довижину настипних стрінгових значень
//     'hello world', 'lorem ipsum', 'javascript is cool'

//const strHello = 'hello world';
// console.log('Довжина змінної strHello:', strHello.length);
//
// const strLorem = 'lorem ipsum';
// console.log('Довжина змінної strLorem:', strLorem.length);
//
// const strJs = 'javascript is cool';
// console.log('Довжина змінної strJs:', strJs.length);



// 6.2- Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'

//const strHello = 'hello world';
// console.log(strHello.toUpperCase());
//
// const strLorem = 'lorem ipsum';
// console.log(strLorem.toUpperCase());
//
// const strJs = 'javascript is cool';
// console.log(strJs.toUpperCase());


//#ClDsAm7xba7
// 6.3 - Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

//const strHello = 'HELLO WORLD';
// console.log(strHello.toLowerCase());
//
// const strLorem = 'LOREM IPSUM';
// console.log(strLorem.toLowerCase());
//
// const strJs = 'JAVASCRIPT IS COOL';
// console.log(strJs.toLowerCase());



// #0b89BkYZwu
// 6.4 - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

//let str = ' dirty string   ';
// console.log(str.trim());


//#bfoJuse4ZzP
// 6.5 - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
//     let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

//  let str = 'Ревуть воли як ясла повні';
//
//   let stringToarray = (str) =>
//   {
//       if (str) {
//           return str.split(' ');
//       }
//       return ['']
//   }
//
//   console.log(stringToarray(str));


//#Rbr5kEQ
// 6.6 - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

//const arr = [10,8,-7,55,987,-1011,0,1050,0];
// const arrToString = arr.map(value => value.toString());
//
// console.log(arrToString);


//#5hqyKTfmc
// 6.7 - створити функцію sortNums(array,direction), яка прймає масив чисел,
// та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

//  let nums = [11,21,3];
//
//    let sortNums = (nums, direction) => {
//        if(direction === 'descending') return nums.sort((num1, num2) => num2 - num1);
//
//         if(direction === 'ascending') return nums.sort((num1, num2) => num1 - num2);
//         else {
//            return ('Enter the correct question!');
//        }
//    }
//
//    console.log(sortNums(nums, 'descending'));


//#yo06d74c1C
// 6.8 - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//  -- відсортувати його за спаданням за monthDuration
//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//  -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
//  =========================


//const coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];

//const mapCourses = coursesAndDurationArray
//         .sort((a, b) => b.monthDuration - a.monthDuration)
//         .filter((course) => course.monthDuration > 5)
//         .map((course, index) => {
//         let newCourse = {
//         id: index + 1,
//         title: course.title,
//         mapCourses: course.monthDuration,
//
//         }
//         return newCourse;
//         });
// console.log(mapCourses);

//const mapCourses = coursesAndDurationArray
//     .sort((a, b) => b.monthDuration - a.monthDuration)
//     .filter((course) => course.monthDuration > 5)
//     .map((course, index) => ({id: index + 1, ...course}));
//
// console.log(mapCourses);


// #bolvdlhP
//  6.9 - описати колоду карт (від 6 до туза без джокерів)
//  - знайти піковий туз
//  - всі шістки
//  - всі червоні карти
//  - всі буби
//  - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10', 'ace','jack','queen','king'
//     color:'', // 'red','black'
// }

//  const suits = ['spade', 'diamond','heart', 'clubs'];
//    const values = ['6', '7', '8', '9', '10','jack','queen','king', 'ace'];
//
//    const cards = [];
//
//    for (const suit of suits) {
//        for (const value of values) {
//           const card = {cardSuit: suit, value: value};
//           if (suit === 'heart' || suit === 'diamond') {
//               card.color = 'red';
//           } else {
//               card.color = 'black';
//           }
//           cards.push(card);
//        }
//    }
//
//    console.log(cards);
//
//
// console.log(cards.find(card => card.value === 'ace' && card.cardSuit === 'spade') );
// console.log(cards.filter(card => card.value === '6'));
// console.log(cards.filter(card => card.color === 'red'));
// console.log(cards.filter(card => card.cardSuit === 'diamond'));
// console.log(cards.filter(card => card.cardSuit === 'clubs' && (card.value !== '6' && card.value !== '7' && card.value !== '8')));


//#EP5I1UUzAX
// 6.10 - Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }



//let sortCards = cards.reduce((acc, card) => {
//     if (card.cardSuit === 'spade') {
//         acc.spades.push(card);
//     } if (card.cardSuit === 'diamond') {
//         acc.diamonds.push(card);
//     } if (card.cardSuit === 'heart') {
//         acc.hearts.push(card);
//     } if (card.cardSuit === 'clubs') {
//         acc.clubs.push(card);
//     }
//
//     return acc;
//
// }, {spades:[], diamonds:[], hearts:[], clubs:[]});
//
// console.log(sortCards);

//#4LJn7zBx
// 6.11 - взяти з arrays.js масив coursesArray
// --написати пошук всіх об'єктів, в яких в modules є sass
// --написати пошук всіх об'єктів, в яких в modules є docker



//const coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];



//const coursesSass = coursesArray.filter(course => {
//     return course.modules.includes('sass');
// })
//
// console.log(coursesSass);
//
// const coursesDocker = coursesArray.filter(course => {
//     return course.modules.includes('docker');
// });
//
// console.log(coursesDocker);