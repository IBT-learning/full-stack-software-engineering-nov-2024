async function loadPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
    const posts = await response.json();

    const container = document.getElementById("posts");
    container.innerHTML = "";

    posts.forEach(post => {
      const div = document.createElement("div");
      div.classList.add("post");
      div.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.body}</p>
      `;
      container.appendChild(div);
    });
  } catch (err) {
    console.error("Error loading posts:", err);
  }
}

// Run once the HTML is loaded
document.addEventListener("DOMContentLoaded", loadPosts);
