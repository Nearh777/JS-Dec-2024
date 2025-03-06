'use strict';


// #HmvAfRQM
// 11.1 - взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.
//
// const cartsDiv = document.querySelector('.carts')
// fetch('https://dummyjson.com/carts')
//     .then(res => res.json())
//     .then(({carts}) => {
//         console.log(carts, carts.products);
//
//
//
//         for (const cart of carts) {
//             const div = document.createElement('div');
//             div.classList.add('cart-container');
//             const divWithInfo = document.createElement('div');
//
//             divWithInfo.textContent = `
//             "total": ${cart.total},
//             "discountedTotal": ${cart.discountedTotal},
//             "userId": ${cart.userId},
//             "totalProducts": ${cart.totalProducts},
//             "totalQuantity": ${cart.totalQuantity}
//
//             `;
//
//             const ul = document.createElement('ul');
//             ul.classList.add('list');
//             for (const product of cart.products) {
//             const li = document.createElement('li');
//                 li.classList.add('list-item');
//             const info = document.createElement('p');
//
//             info.textContent = `
//              id: ${product.id},
//             "title": ${product.title},
//             "price": ${product.price},
//             "quantity": ${product.quantity},
//             "total": ${product.total},
//             "discountPercentage": ${product.discountPercentage},
//             "discountedTotal": ${product.discountedTotal}
//             `
//             const img = document.createElement('img');
//             img.src = product.thumbnail;
//
//
//                 li.append(img, info);
//                 ul.appendChild(li);
//             }
//
//             div.append(divWithInfo, ul);
//             cartsDiv.appendChild(div);
//
//         }
//
//
//     });




// #whXxOBlYS0H
// 11.2 - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути список під час відображення.

// const recipesDiv = document.getElementById('recipes');
// const url = new URL('https://dummyjson.com/recipes');
// url.searchParams.set('limit', '50');
//
// fetch(url)
//     .then(res => res.json())
//     .then(({recipes}) => {
//         console.log(recipes);
//
//
//         for (const recipe of recipes) {
//             const recipeDiv = document.createElement('div');
//
//             for (const recipeKey in recipe) {
//                 if (Array.isArray(recipe[recipeKey])) {
//                     const arrayTitleDiv = document.createElement('div');
//                     const title = document.createElement('h3');
//                     title.innerText = `${recipeKey}:`;
//                     const list = document.createElement('ol');
//                     const array = recipe[recipeKey];
//                     for (const item of array) {
//                         console.log(recipeKey);
//                         const listItem = document.createElement('li');
//                         listItem.innerText = item;
//                         list.appendChild(listItem);
//                     }
//                     arrayTitleDiv.append(title, list);
//                     recipeDiv.appendChild(arrayTitleDiv);
//                 } else {
//                     if (recipeKey !== 'image') {
//
//                         const keyDiv = document.createElement('div');
//                         keyDiv.innerText = `${recipeKey}: ${recipe[recipeKey]}`;
//                         recipeDiv.appendChild(keyDiv);
//                     }
//                 }
//
//
//             }
//             const img = document.createElement('img');
//             img.src = recipe.image;
//             recipeDiv.appendChild(img);
//
//             recipesDiv.appendChild(recipeDiv);
//         }
//
//
//     });
//
//
//




























