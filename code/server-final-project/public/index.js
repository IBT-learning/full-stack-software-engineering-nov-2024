document.addEventListener("DOMContentLoaded", () => {
  const uploadInput = document.getElementById("uploadInput");
  const changePicBtn = document.getElementById("changePicBtn");
  const profileImage = document.getElementById("profileImage");

  changePicBtn.addEventListener("click", () => {
    uploadInput.click(); // open file explorer
  });

  uploadInput.addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (file) {
      // Preview the image without uploading yet
      const reader = new FileReader();
      reader.onload = function(e) {
        profileImage.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  });
});


// api connection
async function fetchPosts() {
    try {
      const response = await fetch('/api/posts');
      if (!response.ok) throw new Error('Failed to fetch posts');
      return await response.json();
    } catch (error) {
      console.error('Error fetching posts:', error);
      return [];
    }
  }

  async function fetchUserData(userId) {
    try {
      const response = await fetch(`/api/users/${userId}`);
      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }
      const user = await response.json();
      console.log(user); // Log the fetched user data
      return user;
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  }
  
  
// rendering function

  function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  }
  
  function renderPosts(posts) {
    const postsContainer = document.querySelector('.blog-posts');
    if (!postsContainer) return;
    
    const h2 = postsContainer.querySelector('h2');
    postsContainer.innerHTML = '';
    if (h2) postsContainer.appendChild(h2);
    
    posts.forEach(post => {
      const postElement = document.createElement('article');
      postElement.className = 'post';
      postElement.innerHTML = `
        <div class="post-header">
          <img src="${post.user.profilePhoto}" alt="${post.user.name}" class="user-avatar">
          <div>
            <a href="profile.html?id=${post.user.id}" class="username">${post.user.name}</a>
            <span class="timestamp">${formatDate(post.date)}</span>
          </div>
        </div>
        <h3>${post.title}</h3>
        ${post.image ? `<img src="${post.image}" alt="${post.title}" class="post-image">` : ''}
        <p class="post-body">${post.body}</p>
        <div class="post-meta">
          ${post.tags ? post.tags.map(tag => `<span class="tag">${tag}</span>`).join('') : ''}
        </div>
      `;
      postsContainer.appendChild(postElement);
    });
  }
  
  function renderProfile(user) {
    const profilePhoto = document.querySelector('.profile-photo');
    if (profilePhoto) profilePhoto.src = user.profilePhoto;
    
    const profileName = document.querySelector('.profile-info h1');
    if (profileName) profileName.textContent = user.name;
    
    const bio = document.querySelector('.bio');
    if (bio) bio.textContent = user.bio;
    
    const profileDetails = document.querySelector('.profile-details');
    if (profileDetails) {
      profileDetails.innerHTML = `
        <p><strong>Location:</strong> ${user.location}</p>
        <p><strong>Skills:</strong> ${user.skills}</p>
        <p><strong>Interests:</strong> ${user.interests}</p>
      `;
    }
  }
  
  function renderUserPosts(posts) {
    const postsContainer = document.querySelector('.user-posts');
    if (!postsContainer) return;
    
    const h2 = postsContainer.querySelector('h2');
    postsContainer.innerHTML = '';
    if (h2) postsContainer.appendChild(h2);
    
    posts.forEach(post => {
      const postElement = document.createElement('article');
      postElement.className = 'post';
      postElement.innerHTML = `
        <h3>${post.title}</h3>
        ${post.image ? `<img src="${post.image}" alt="${post.title}" class="post-image">` : ''}
        <p class="post-body">${post.body}</p>
        <div class="post-meta">
          <span class="date">${formatDate(post.date)}</span>
        </div>
      `;
      postsContainer.appendChild(postElement);
    });
  }
  
  

  async function initBlogPage() {
    const posts = await fetchPosts();
    renderPosts(posts);
    
    // Update about section by appending to existing content
    if (posts.length > 0) {
      const aboutSection = document.querySelector('.about-blog p');
      if (aboutSection) {
        aboutSection.textContent = `${aboutSection.textContent}`;
        // This preserves the original text and adds the user bio
      }
    }
  }
  
  async function initProfilePage() {
    const userId = new URLSearchParams(window.location.search).get('id') || 1;
    const posts = await fetchPosts();
    const userPosts = posts.filter(post => post.user.id === parseInt(userId));
    
    if (userPosts.length > 0) {
      renderProfile(userPosts[0].user);
      renderUserPosts(userPosts);
    }
  }
  
  if (window.location.pathname.includes('profile.html')) {
    initProfilePage();
  } else {
    initBlogPage();
  }