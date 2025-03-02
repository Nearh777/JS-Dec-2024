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
            const divWithInfo = document.createElement('div');

            divWithInfo.textContent = `
            "total": ${cart.total},
            "discountedTotal": ${cart.discountedTotal},
            "userId": ${cart.userId},
            "totalProducts": ${cart.totalProducts},
            "totalQuantity": ${cart.totalQuantity}

            `;

            const ul = document.createElement('ul');
            ul.classList.add('list');
            for (const product of cart.products) {
            const li = document.createElement('li');
                li.classList.add('list-item');
            const info = document.createElement('p');

            info.textContent = `
             id: ${product.id},
            "title": ${product.title},
            "price": ${product.price},
            "quantity": ${product.quantity},
            "total": ${product.total},
            "discountPercentage": ${product.discountPercentage},
            "discountedTotal": ${product.discountedTotal}
            `
            const img = document.createElement('img');
            img.src = product.thumbnail;


                li.append(img, info);
                ul.appendChild(li);
            }

            div.append(divWithInfo, ul);
            cartsDiv.appendChild(div);

        }


    });




// #whXxOBlYS0H
// 11.1 - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути список під час відображення.