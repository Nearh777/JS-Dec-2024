'use strict';


document.addEventListener("DOMContentLoaded", async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get("id");
    if (!userId) return;

    const userInfo = document.getElementById("user-info");
    const postsContainer = document.getElementById("posts-container");
    const loadPostsButton = document.getElementById("load-posts");

    // Fetch user details
    const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const user = await userResponse.json();
    userInfo.innerHTML = `
        <h2>${user.name}</h2>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Phone:</strong> ${user.phone}</p>
        <p><strong>Website:</strong> ${user.website}</p>
        <p><strong>Company:</strong> ${user.company.name}</p>
        <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
    `;

    // Fetch posts on button click
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
});
