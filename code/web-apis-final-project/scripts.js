const blogPostsContainer = document.getElementById("blog-posts");
const userPostsContainer = document.getElementById("user-posts");
const usernameElement = document.getElementById("username");
const emailElement = document.getElementById("email");

// Function to fetch and display blog posts with different users
async function fetchBlogPosts() {
  try {
    const postsResponse = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await postsResponse.json();

    const usersResponse = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await usersResponse.json();

    blogPostsContainer.innerHTML = ""; // Clear previous posts

    posts.slice(0, 10).forEach(post => {
      const randomUser = users[Math.floor(Math.random() * users.length)]; // Pick a random user
      const postElement = createPostElement(post, randomUser);
      blogPostsContainer.appendChild(postElement);
    });
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
}

// Function to fetch and display user-specific posts on the profile page
async function fetchUserProfile(userId = 1) {
  try {
    const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const user = await userResponse.json();

    if (usernameElement && emailElement) {
      usernameElement.textContent = user.username;
      emailElement.textContent = user.email;
    }

    const postsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    const posts = await postsResponse.json();

    userPostsContainer.innerHTML = ""; // Clear previous posts

    if (posts.length === 0) {
      userPostsContainer.innerHTML = "<p class='no-posts'>No posts available.</p>";
    } else {
      posts.slice(0, 5).forEach(post => {
        const postElement = createPostElement(post, user);
        userPostsContainer.appendChild(postElement);
      });
    }
  } catch (error) {
    console.error("Error fetching user profile or posts:", error);
  }
}

// Helper function to create a post element
function createPostElement(post, user) {
  const postElement = document.createElement("div");
  postElement.classList.add("post");

  postElement.innerHTML = `
    <div class="post-header">
      <img src="https://i.pravatar.cc/40?u=${user.id}" alt="${user.name}" class="user-icon">
      <div>
        <a href="profile.html?userId=${user.id}" class="username">${user.name}</a>
        <p class="timestamp">Post ID: ${post.id}</p>
      </div>
    </div>
    <h3>${post.title}</h3>
    <p>${post.body}</p>
  `;

  return postElement;
}

// Determine which page is active and load the appropriate content
if (blogPostsContainer) {
  fetchBlogPosts();
}

if (userPostsContainer) {
  const urlParams = new URLSearchParams(window.location.search);
  const userId = urlParams.get("userId") || 1;
  fetchUserProfile(userId);
}

