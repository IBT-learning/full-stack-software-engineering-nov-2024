fetch("/api/posts")
  .then(res => res.json())
  .then(posts => {
    const container = document.getElementById("blog-posts");
    posts.forEach(post => {
      const card = document.createElement("div");
      card.innerHTML = `
        <h2>${post.title}</h2>
        <p><strong>Author:</strong> ${post.userId}</p>
        <p>${post.body}</p>
        <hr>
      `;
      container.appendChild(card);
    });
  })
  .catch(err => console.error("Error fetching posts:", err));
