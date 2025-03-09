'use strict';


// document.addEventListener("DOMContentLoaded", async () => {
//     const urlParams = new URLSearchParams(window.location.search);
//     const userId = urlParams.get("id");
//     if (!userId) return;
//
//     const userInfo = document.getElementById("user-info");
//     const postsContainer = document.getElementById("posts-container");
//     const loadPostsButton = document.getElementById("load-posts");
//
//     // Fetch user details
//     const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
//     const user = await userResponse.json();
//     userInfo.innerHTML = `
// <h2>${user.name}</h2>
// <p><strong>ID:</strong>${user.id}</p>
// <p><strong>Username:</strong>${user.username}</p>
// <p><strong>Email:</strong> ${user.email}</p>
// <p><strong>Phone:</strong> ${user.phone}</p>
// <p><strong>Website:</strong> ${user.website}</p>
// <p><strong>Company:</strong> Name: ${user.company.name}, catchPhrase: ${user.company.catchPhrase}, Bs: ${user.company.bs}</p>
// <p><strong>Address:</strong> st. ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>
// <p><strong>Geo:</strong> Lat: ${user.address.geo.lat}, Lng: ${user.address.geo.lng}</p>
//     `;
//
//     // Fetch posts on button click
//     loadPostsButton.addEventListener("click", async () => {
//         const postsResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`);
//         const posts = await postsResponse.json();
//         postsContainer.innerHTML = "";
//         posts.forEach(post => {
//             const postDiv = document.createElement("div");
//             postDiv.classList.add("post-card");
//             postDiv.innerHTML = `
//                 <h3>${post.title}</h3>
//                 <a href="post-details.html?id=${post.id}">View Post</a>
//             `;
//             postsContainer.appendChild(postDiv);
//         });
//     });
// });

const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get("id");

async function userInfoFunc () {
    if (!userId) return;

    userInfoFetch ();
    loadPostBtn ();

};


// Fetch user details
async function userInfoFetch () {
    const userInfo = document.getElementById("user-info");

    const user = await (await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)).json();

    userInfo.innerHTML = `
<h2>${user.name}</h2>
<p><strong>ID:</strong>${user.id}</p>
<p><strong>Username:</strong>${user.username}</p>
<p><strong>Email:</strong> ${user.email}</p>
<p><strong>Phone:</strong> ${user.phone}</p>
<p><strong>Website:</strong> ${user.website}</p>
<p><strong>Company:</strong> Name: ${user.company.name}, catchPhrase: ${user.company.catchPhrase}, Bs: ${user.company.bs}</p>
<p><strong>Address:</strong> st. ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>
<p><strong>Geo:</strong> Lat: ${user.address.geo.lat}, Lng: ${user.address.geo.lng}</p>
    `;


};




 function loadPostBtn () {

    const postsContainer = document.getElementById("posts-container");
    const loadPostsButton = document.getElementById("load-posts");

        loadPostsButton.addEventListener("click", async () => {
        const postsResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`);
        const posts = await postsResponse.json();
        postsContainer.innerHTML = "";
        posts.forEach(post => {
            const postDiv = document.createElement("div");
            postDiv.classList.add("post-card");
            postDiv.innerHTML = `
                <h3>${post.title}</h3>
                <a href="post-details.html?id=${post.id}">View Post</a>
            `;
            postsContainer.appendChild(postDiv);
        });
    });
}


userInfoFunc();


