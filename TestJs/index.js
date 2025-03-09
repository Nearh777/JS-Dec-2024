'use strict';


//В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання ,
// при кліку на яку відбувається перехід  на сторінку user-details.html,
// котра має детальну інфорацію про об'єкт на який клікнули


//  {
//     "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {
//       "street": "Kulas Light",
//       "suite": "Apt. 556",
//       "city": "Gwenborough",
//       "zipcode": "92998-3874",
//       "geo": {
//         "lat": "-37.3159",
//         "lng": "81.1496"
//       }
//     },
//     "phone": "1-770-736-8031 x56442",
//     "website": "hildegard.org",
//     "company": {
//       "name": "Romaguera-Crona",
//       "catchPhrase": "Multi-layered client-server neural-net",
//       "bs": "harness real-time e-markets"
//     }
//   },


// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then((arrayUsers) => {
//
//         const usersDiv = document.querySelector('.wrapper-users');
//
//
//         for (const user of arrayUsers) {
//             const {name, id} = user;
//             const userDiv = document.createElement('div');
//             const title = document.createElement('h3');
//             const userId = document.createElement('p');
//             const buttonUserInfo = document.createElement('a');
//
//             buttonUserInfo.classList.add('button-user__info');
//             userDiv.classList.add('user-card');
//             title.textContent = `${name}`;
//             userId.textContent = `id: ${id}`;
//             buttonUserInfo.textContent = `Info`;
//             buttonUserInfo.onclick = function (e) {location.href=`./user-details.html?userId=${id}`};
//             userDiv.append(title, userId, buttonUserInfo);
//
//
//             usersDiv.appendChild(userDiv);
//         }
//
//     });

// document.addEventListener("DOMContentLoaded", async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const users = await response.json();
//     const container = document.getElementById("users-container");
//     users.forEach(user => {
//         const userDiv = document.createElement("div");
//         userDiv.classList.add("user-card");
//         userDiv.innerHTML = `
//                     <p><strong>ID:</strong> ${user.id}</p>
//                     <p><strong>Name:</strong> ${user.name}</p>
//                     <a href="user-details.html?id=${user.id}">View Details</a>
//                 `;
//         container.appendChild(userDiv);
//     });
// });

 async function user() {
     const users = await (await fetch("https://jsonplaceholder.typicode.com/users")).json();


     const container = document.getElementById("users-container");
     users.forEach(user => {
         const userDiv = document.createElement('div');
         userDiv.classList.add('user-card');
         userDiv.innerHTML = `
         <p><strong>ID:</strong> ${user.id}</p>
         <h3> ${user.name}</h3>
          <a href="user-details.html?id=${user.id}">View Details</a>
         `;

         container.appendChild(userDiv);
     });

 };
        user();