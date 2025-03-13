const blogPostsContainer = document.getElementById("blog-posts");
const userPostsContainer = document.getElementById("user-posts");
const usernameElement = document.getElementById("username");
const emailElement = document.getElementById("email");

// Function to fetch and display blog posts with different users
async function fetchBlogPosts() {
  try {
    const postsResponse = await fetch("https://jsonplaceholder.typicode.com/posts");
    const usersResponse = await fetch("https://jsonplaceholder.typicode.com/users");

    const posts = await postsResponse.json();
    const users = await usersResponse.json();

    blogPostsContainer.innerHTML = "";

    posts.slice(0, 10).forEach(post => {
      const randomUser = users[Math.floor(Math.random() * users.length)]; // Assign a random user

      // Create post container
      const postElement = document.createElement("div");
      postElement.classList.add("post");

      // Create post header
      const postHeader = document.createElement("div");
      postHeader.classList.add("post-header");

      // Create user image
      const userImg = document.createElement("img");
      userImg.src = `https://i.pravatar.cc/40?u=${randomUser.id}`;
      userImg.alt = randomUser.name;
      userImg.classList.add("user-icon");

      // Create user info container
      const userInfo = document.createElement("div");

      // Create user name (as a link)
      const userLink = document.createElement("a");
      userLink.href = `profile.html?userId=${randomUser.id}`;
      userLink.textContent = randomUser.name;
      userLink.classList.add("username");

      // Create timestamp
      const timestamp = document.createElement("p");
      timestamp.classList.add("timestamp");
      timestamp.textContent = `Post ID: ${post.id}`;

      // Append user name and timestamp to user info
      userInfo.appendChild(userLink);
      userInfo.appendChild(timestamp);

      // Append user image and info to post header
      postHeader.appendChild(userImg);
      postHeader.appendChild(userInfo);

      // Create post content
      const postTitle = document.createElement("h2");
      postTitle.textContent = post.title;

      const postBody = document.createElement("p");
      postBody.textContent = post.body;

      // Append elements to post container
      postElement.appendChild(postHeader);
      postElement.appendChild(postTitle);
      postElement.appendChild(postBody);

      // Append post to blog container
      blogPostsContainer.appendChild(postElement);
    });
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
}

// Function to fetch and display posts of a specific user (default is User ID 2)
async function fetchUserProfile(userId = 1) {
  try {
    const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const user = await userResponse.json();

    if (usernameElement && emailElement) {
      usernameElement.textContent = user.name;
      emailElement.textContent = user.email;
    }

    const postsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    const posts = await postsResponse.json();

    userPostsContainer.innerHTML = "";

    if (posts.length === 0) {
      userPostsContainer.innerHTML = "<p class='no-posts'>No posts available.</p>";
    } else {
      posts.slice(0, 5).forEach(post => {
        // Create post container
        const postElement = document.createElement("div");
        postElement.classList.add("post");

        // Create post header
        const postHeader = document.createElement("div");
        postHeader.classList.add("post-header");

        // Create user image
        const userImg = document.createElement("img");
        userImg.src = `https://i.pravatar.cc/40?u=${user.id}`;
        userImg.alt = user.name;
        userImg.classList.add("user-icon");

        // Create user info container
        const userInfo = document.createElement("div");

        // Create user name
        const userLink = document.createElement("a");
        userLink.href = `profile.html?userId=${user.id}`;
        userLink.textContent = user.name;
        userLink.classList.add("username");

        // Create timestamp
        const timestamp = document.createElement("p");
        timestamp.classList.add("timestamp");
        timestamp.textContent = `Post ID: ${post.id}`;

        // Append user name and timestamp to user info
        userInfo.appendChild(userLink);
        userInfo.appendChild(timestamp);

        // Append user image and info to post header
        postHeader.appendChild(userImg);
        postHeader.appendChild(userInfo);

        // Create post content
        const postTitle = document.createElement("h2");
        postTitle.textContent = post.title;

        const postBody = document.createElement("p");
        postBody.textContent = post.body;

        // Append elements to post container
        postElement.appendChild(postHeader);
        postElement.appendChild(postTitle);
        postElement.appendChild(postBody);

        // Append post to user posts container
        userPostsContainer.appendChild(postElement);
      });
    }
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
}

// Load all blog posts for the home page
if (blogPostsContainer) {
  fetchBlogPosts();
}

// Load user profile posts for User ID 2 by default
if (userPostsContainer) {
  const urlParams = new URLSearchParams(window.location.search);
  const userId = urlParams.get("userId") || 1
  fetchUserProfile(userId);
}
