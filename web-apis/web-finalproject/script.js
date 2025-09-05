document.addEventListener("DOMContentLoaded", () => {
  const postsContainer = document.getElementById("posts-container");

  // Fetch all posts
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(posts => {
      // Show first 5 posts (to avoid overloading page with 100)
      posts.slice(0, 5).forEach(post => {
        const postElement = document.createElement("div");
        postElement.classList.add("post");
        postElement.innerHTML = `
          <h2>${post.title}</h2>
          <p>${post.body}</p>
          <small>Post ID: ${post.id} | User ID: ${post.userId}</small>
        `;
        postsContainer.appendChild(postElement);
      });
    })
    .catch(error => {
      console.error("Error fetching posts:", error);
      postsContainer.innerHTML = `<p>Failed to load posts.</p>`;
    });
});
