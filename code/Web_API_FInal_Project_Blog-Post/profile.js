document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search); //this helps Linking from the  homepage author names to individual profile pages
  const userId = params.get("userId") || 1;
  const userNameEl = document.getElementById("user-name");
  const postContainer = document.getElementById("blog-posts");

  async function fetchUserPosts(userId) {
    const user = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`).then(res => res.json());
    userNameEl.textContent = `Posts by ${user.name}`;

    const posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`).then(res => res.json());

    posts.forEach(post => {
      const card = document.createElement("div");
      card.className = "post-card";

      card.innerHTML = `
        <div>
          <img src="https://i.pravatar.cc/150?img=${user.id}" class="avatar" alt="avatar">
          <strong>${user.name}</strong>
        </div>
        <div class="post-title"><strong>${post.title}</strong></div>
        <div class="post-body">${post.body}</div>
        <div class="actions">
          <span>❤️ Like</span>
          <span>💬 Comment</span>
          <span>➡️ Share</span>
        </div>
      `;
      // I've introduced an avatar to make it more real

      postContainer.appendChild(card);
    });
  }

  fetchUserPosts(userId);
});

/* theme.js */
document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");
  if (!themeToggle) return;

  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });
});
