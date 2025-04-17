// js/script.js
document.addEventListener("DOMContentLoaded", () => {
  const blogSection = document.querySelector(".blog-posts");
  const profileSection = document.querySelector(".profile-posts");

  if (blogSection) {
    blogSection.innerHTML = "<p>Loading posts…</p>";
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then((res) => res.json())
      .then((posts) => {
        blogSection.innerHTML = "";
        posts.forEach((post) => {
          blogSection.appendChild(createPostElement(post, false));
        });
      })
      .catch((err) => console.error(err));
  }

  if (profileSection) {
    profileSection.innerHTML = "<h3>Recent Posts</h3><p>Loading posts…</p>";
    fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
      .then((res) => res.json())
      .then((posts) => {
        profileSection.innerHTML = "<h3>Recent Posts</h3>";
        posts.forEach((post) => {
          profileSection.appendChild(createPostElement(post, true));
        });
      })
      .catch((err) => console.error(err));
  }
});

function createPostElement(post, isProfile) {
  const article = document.createElement("article");
  article.className = "post";

  // Header
  const header = document.createElement("div");
  header.className = "post-header";
  const img = document.createElement("img");
  img.className = "user-icon";
  img.src = "images/woman-6771288_640.jpg";
  img.alt = "user icon";
  header.append(img);

  const info = document.createElement("div");
  info.className = "post-info";
  const nameEl = document.createElement("h2");
  nameEl.className = "username";
  nameEl.textContent = "…";
  const timeEl = document.createElement("time");
  const now = new Date();
  timeEl.dateTime = now.toISOString();
  timeEl.textContent =
    now.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }) +
    ", " +
    now.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
    });
  info.append(nameEl, timeEl);
  header.append(info);

  if (isProfile) {
    const edit = document.createElement("div");
    edit.className = "edit-icon";
    edit.innerHTML = `<a href="#"><img src="images/edit1.jpg" alt="edit"></a>`;
    header.append(edit);
  }

  // Content
  const content = document.createElement("div");
  content.className = "post-content";
  const p = document.createElement("p");
  p.textContent = post.body;
  content.append(p);

  article.append(header, content);

  // Fill in username
  fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
    .then((r) => r.json())
    .then((user) => {
      nameEl.textContent = user.username;
    })
    .catch(() => {
      nameEl.textContent = "Unknown";
    });

  return article;
}
