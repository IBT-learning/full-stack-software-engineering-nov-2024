document.addEventListener("DOMContentLoaded", () => {
  const postContainer = document.getElementById("blog-posts");

  async function fetchPosts(limit = 6) {
    const posts = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`).then(res => res.json());

    for (const post of posts) {
      const user = await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`).then(res => res.json());
      const card = document.createElement("div");
      card.className = "post-card";

      card.innerHTML = `
        <div>
          <img src="https://i.pravatar.cc/150?img=${user.id}" class="avatar" alt="avatar">
          <a href="profile.html?userId=${user.id}" class="author-link">${user.name}</a>
        </div>
        <div class="post-title"><strong>${post.title}</strong></div>
        <div class="post-body">${post.body}</div>
        <div class="actions">
          <span>❤️ Like</span>
          <span>💬 Comment</span>
          <span>➡️ Share</span>
        </div>
      `;
      // I've introduced an avatar with the help of i.pravatar.cc

      postContainer.appendChild(card);
    }
  }

  fetchPosts();
  
});

/* theme.js */
document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");
  if (!themeToggle) return;

  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });
});
  
