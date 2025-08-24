// Fetch blog posts when page loads

document.addEventListener("DOMContentLoaded", () => {
  fetch("https://jsonplaceholder.typicode.com/posts?_limit=5") // limit to 5 posts
    .then(response => response.json())
    .then(posts => {
      const container = document.getElementById("blog-posts");

      posts.forEach(post => {
        const postElement = document.createElement("div");
        postElement.classList.add("post");

        postElement.innerHTML = `
          <h2>${post.title}</h2>
          <p>${post.body}</p>
        `;

        container.appendChild(postElement);
      });
    })
    .catch(error => console.error("Error fetching posts:", error));
});
