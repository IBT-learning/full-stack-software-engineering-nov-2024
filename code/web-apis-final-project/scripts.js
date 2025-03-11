// // Fetch blog posts from JSONPlaceholder API
// async function fetchBlogPosts() {
//     try {
//       const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//       const posts = await response.json();
  
//       // Display the first 4 posts
//       const blogPostsContainer = document.getElementById('blog-posts');
//       blogPostsContainer.innerHTML = ''; // Clear existing content
  
//       posts.slice(0, 4).forEach(post => {
//         const postElement = document.createElement('article');
//         postElement.classList.add('post');
  
//         postElement.innerHTML = `
//           <div class="post-header">
//             <img src="images/198520735_323032106092949_8951232071875405343_n.jpg" alt="User Icon" class="user-icon">
//             <span class="username">User ${post.userId}</span>
//             <span class="timestamp">2 hours ago</span>
//           </div>
//           <p>${post.title}</p>
//           <p>${post.body}</p>
//         `;
  
//         blogPostsContainer.appendChild(postElement);
//       });
//     } catch (error) {
//       console.error('Error fetching blog posts:', error);
//       const blogPostsContainer = document.getElementById('blog-posts');
//       blogPostsContainer.innerHTML = '<p class="error">Failed to load blog posts. Please try again later.</p>';
//     }
//   }


// async function fetchBlogPosts() {
//     try {
//       const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//       const posts = await response.json();
  
//       // Limit the number of posts (e.g., 4 posts)
//       const numberOfPosts = 4; // Change this to the number of posts you want
//       const limitedPosts = posts.slice(0, numberOfPosts);
  
//       // Display the limited posts
//       const blogPostsContainer = document.getElementById('blog-posts');
//       blogPostsContainer.innerHTML = ''; // Clear existing content
  
//       limitedPosts.forEach(post => {
//         const postElement = document.createElement('article');
//         postElement.classList.add('post');
  
//         postElement.innerHTML = `
//           <div class="post-header">
//             <img src="images/198520735_323032106092949_8951232071875405343_n.jpg" alt="User Icon" class="user-icon">
//             <span class="username">User ${post.userId}</span>
//             <span class="timestamp">2 hours ago</span>
//           </div>
//           <p>${post.title}</p>
//           <p>${post.body}</p>
//         `;
  
//         blogPostsContainer.appendChild(postElement);
//       });
//     } catch (error) {
//       console.error('Error fetching blog posts:', error);
//     }
//   }
  
//   fetchBlogPosts();

async function fetchBlogPosts() {
    try {
      // Fetch all posts
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const posts = await response.json();
  
      // Limit the number of posts (e.g., 4 posts)
      const numberOfPosts = 4; // Change this to the number of posts you want
      const limitedPosts = posts.slice(0, numberOfPosts);
  
      // Display the limited posts
      const blogPostsContainer = document.getElementById('blog-posts');
      blogPostsContainer.innerHTML = ''; // Clear existing content
  
      limitedPosts.forEach(post => {
        const postElement = document.createElement('article');
        postElement.classList.add('post');
  
        postElement.innerHTML = `
          <div class="post-header">
            <img src="images/198520735_323032106092949_8951232071875405343_n.jpg" alt="User Icon" class="user-icon">
            <span class="username">User ${post.userId}</span>
            <span class="timestamp">2 hours ago</span>
          </div>
          <p>${post.title}</p>
          <p>${post.body}</p>
        `;
  
        blogPostsContainer.appendChild(postElement);
      });
    } catch (error) {
      console.error('Error fetching blog posts:', error);
    }
  }
  
  fetchBlogPosts();
  
  // Fetch user data from JSONPlaceholder API
  async function fetchUser(userId) {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
      const user = await response.json();
      return user;
    } catch (error) {
      console.error('Error fetching user data:', error);
      return null;
    }
  }
  
  // Fetch posts for a specific user
  async function fetchUserPosts(userId) {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
      const posts = await response.json();
  
      const userPostsContainer = document.getElementById('user-posts');
      userPostsContainer.innerHTML = '';
  
      if (posts.length === 0) {
        userPostsContainer.innerHTML = '<p class="no-posts">No posts found for this user.</p>';
        return;
      }
  
      posts.forEach(post => {
        const postElement = document.createElement('article');
        postElement.classList.add('post');
  
        postElement.innerHTML = `
          <div class="post-header">
            <img src="images/198520735_323032106092949_8951232071875405343_n.jpg" alt="User Icon" class="user-icon">
            <span class="username">User ${post.userId}</span>
            <span class="timestamp">2 hours ago</span>
          </div>
          <p>${post.title}</p>
          <p>${post.body}</p>
        `;
  
        userPostsContainer.appendChild(postElement);
      });
    } catch (error) {
      console.error('Error fetching user posts:', error);
      // Display an error message to the user
      const userPostsContainer = document.getElementById('user-posts');
      userPostsContainer.innerHTML = '<p class="error">Failed to load user posts. Please try again later.</p>';
    }
  }
  
  // Update profile info with user data
  async function updateProfileInfo(userId) {
    const user = await fetchUser(userId);
  
    if (user) {
      document.getElementById('username').textContent = user.name;
      document.getElementById('email').textContent = user.email;
    } else {
      document.getElementById('username').textContent = 'Unknown User';
      document.getElementById('email').textContent = 'No email available';
    }
  }
  
  // Check which page is loaded and execute the appropriate code
  if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {
    // Home page: Fetch and display blog posts
    // fetchBlogPosts();
  } else if (window.location.pathname.includes('profile.html')) {
    // Profile page: Fetch and display posts for a specific user
    const userId = 1;
    updateProfileInfo(userId); // Update profile info
    fetchUserPosts(userId); // Fetch and display user posts
  }