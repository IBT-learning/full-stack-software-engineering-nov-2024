document.addEventListener("DOMContentLoaded", () => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then(response => response.json())
      .then(data => {
        const postsContainer = document.getElementById("posts-container");
  
        data.forEach(post => {
          const postElement = document.createElement("div");
          postElement.classList.add("post");
          postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.body}</p>
          `;
          postsContainer.appendChild(postElement);
        });
      })
      .catch(error => console.error("Error fetching posts:", error));
  });