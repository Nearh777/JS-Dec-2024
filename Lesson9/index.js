'use strict';


//#8Nmt60ZT
// 9.1
// - створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.


//let div = document.createElement('div');
// div.classList.add('wrap');
// div.classList.add('collapse');
// div.classList.add('alpha');
// div.classList.add('beta');
//
//
// const cloneNode = div.cloneNode(true)
//
//
// document.body.append(div, cloneNode);


//#OPLI89c9G
// 9.2 - Є масив:
// ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

//let arr = ['Main','Products','About us','Contacts'];
//
// let menu = document.createElement('ul');
// menu.classList.add('menu');
//
//
//   for (const item of arr) {
//        let li = document.createElement('li');
//        li.innerText = item;
//        menu.appendChild(li);
//    }
//
//
// document.body.appendChild(menu);

//#jeBqHV525U5
// 9.3 - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

//let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
//
//
// for (const course of coursesAndDurationArray) {
//
//         let divCourse = document.createElement('div');
//         divCourse.classList.add('courseStyle');
//         divCourse.textContent = `Course: ${course.title},  Duration: - ${course.monthDuration} month.`;
//         document.body.appendChild(divCourse);
//
// }


//#Kx1xgoKy8
// 9.4 - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// Завдання робити через цикли.


//let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
//    for (const course of coursesAndDurationArray) {
//
//            let divCourse = document.createElement('div');
//            divCourse.classList.add('item');
//
//            let title = document.createElement('h2');
//            title.classList.add('heading')
//            title.textContent = course.title;
//
//            let desc = document.createElement('p');
//            desc.classList.add('description');
//            desc.textContent = course.monthDuration;
//
//            divCourse.append(title, desc);
//
//            document.body.appendChild(divCourse);
//
//    }



//=========================
//
// Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
//
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом
// ------------------
//
//
//
// створити три блоки з різним текстовим контентом. зробити так, щоб всі блоки мали висоту найбільшого з них.




//let coursesArray = [
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
//
//
//
//
//
//   for (const course of coursesArray) {
//
//        let modulesArray = [];
//        coursesArray.forEach(module => modulesArray.push([...module.modules]));
//
//        let courseDiv = document.createElement('div');
//        courseDiv.classList.add('wrapper__courses');
//
//        let title = document.createElement('h2');
//        title.textContent = course.title;
//
//        let duration = document.createElement('div');
//        duration.classList.add('duration');
//
//        let monthDuration = document.createElement('p');
//        monthDuration.textContent = `Month: ${course.monthDuration}`;
//
//        let hourDuration = document.createElement('p');
//        hourDuration.textContent = `Hour: ${course.hourDuration}`;
//
//        duration.append(monthDuration, hourDuration);
//
//       let modulesList = document.createElement('ul');
//       modulesList.classList.add('list')
//
//       for (const modules of modulesArray) {
//           let li = document.createElement('li');
//           for (const module of modules) {
//               li.textContent = module;
//
//           }
//           modulesList.appendChild(li);
//            }
//
//        courseDiv.append(title, duration, modulesList);
//
//        document.body.appendChild(courseDiv);
//    }






