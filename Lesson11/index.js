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

const recipesDiv = document.getElementById('recipes');


fetch('https://dummyjson.com/recipes')
    .then(res => res.json())
    .then(({recipes}) => {
        console.log(recipes);


        for (const recipe of recipes) {

            const div = document.createElement('div');


            div.classList.add('recipe-container');
            const divWithInfo = document.createElement('div');

            divWithInfo.textContent = `
            caloriesPerServing: ${recipe.caloriesPerServing},
            cookTimeMinutes: ${recipe.cookTimeMinutes},
            cuisine: ${recipe.cuisine},
            difficulty: ${recipe.difficulty},
            id: ${recipe.id},
            mealType: ${recipe.mealType},
            name: ${recipe.name},
            prepTimeMinutes: ${recipe.prepTimeMinutes},
            rating: ${recipe.rating},
            reviewCount: ${recipe.reviewCount},
            servings: ${recipe.servings},
            tags: ${recipe.tags},
            userId: ${recipe.userId},
            ingredients: ${recipe.ingredients}         
            
            `

            const ulIngredients = document.createElement('ul');
            ulIngredients.classList.add('list-ingredients');
            for (const ingredient of recipe.ingredients) {
            const li = document.createElement('li');
                li.classList.add('list-ingredients-item');
            li.innerText = ingredient;
                ulIngredients.appendChild(li);
            }

            const ulInstructions = document.createElement('ul');
            ulInstructions.classList.add('list-ulInstructions');
            for (const instruction of recipe.instructions) {
                const li = document.createElement('li');
                li.classList.add('list-instructions-item');
                li.innerText = instruction;
                ulInstructions.appendChild(li);
            }



            const img = document.createElement('img');
            img.src = recipe.image;
            div.append(ulInstructions, ulIngredients, divWithInfo, img);
            recipesDiv.appendChild(div);
        }



// image: "https://cdn.dummyjson.com/recipe-images/1.webp"
// ingredients: (6) ['Pizza dough', 'Tomato sauce', 'Fresh mozzarella cheese', 'Fresh basil leaves', 'Olive oil', 'Salt and pepper to taste']
// instructions: (6) ['Preheat the oven to 475°F (245°C).', 'Roll out the pizza dough and spread tomato sauce evenly.', 'Top with slices of fresh mozzarella and fresh basil leaves.', 'Drizzle with olive oil and season with salt and pepper.', 'Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.', 'Slice and serve hot.']

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

    });































