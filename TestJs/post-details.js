'use strict';


document.addEventListener("DOMContentLoaded", async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get("id");
    if (!postId) return;

    const postInfo = document.getElementById("post-info");
    const commentsContainer = document.getElementById("comments-container");

    // Fetch post details
    const postResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    const post = await postResponse.json();
    postInfo.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.body}</p>
    `;

    // Fetch comments
    const commentsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
    const comments = await commentsResponse.json();
    comments.forEach(comment => {
        const commentDiv = document.createElement("div");
        commentDiv.classList.add("comment-card");
        commentDiv.innerHTML = `
            <p><strong>${comment.name}</strong></p>
            <p>${comment.body}</p>
            <p><em>${comment.email}</em></p>
        `;
        commentsContainer.appendChild(commentDiv);
    });
});