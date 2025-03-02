'use strict';


// #HmvAfRQM
// 11.1 - взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.
//
const cartsDiv = document.querySelector('.carts')
fetch('https://dummyjson.com/carts')
    .then(res => res.json())
    .then(({carts}) => {
        console.log(carts, carts.products);



        for (const cart of carts) {
            const div = document.createElement('div');
            div.classList.add('cart-container');

        }


    });





// {
//     "id": 124,
//     "title": "iPhone X",
//     "price": 899.99,
//     "quantity": 4,
//     "total": 3599.96,
//     "discountPercentage": 8.03,
//     "discountedTotal": 3310.88,
//     "thumbnail": "https://cdn.dummyjson.com/products/images/smartphones/iPhone%20X/thumbnail.png"
// },


// #whXxOBlYS0H
// 11.1 - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути список під час відображення.