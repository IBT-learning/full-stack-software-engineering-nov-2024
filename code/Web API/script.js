document.addEventListener('DOMContentLoaded', function () {
    const postsContainer = document.querySelector('.posts-container');
  
    const UNSPLASH_API_URL = "https://api.unsplash.com/photos/random?query=portrait&count=20&client_id=YOUR_UNSPLASH_ACCESS_KEY";
    const PLACEHOLDER_AVATARS = Array.from({ length: 20 }, (_, i) => `https://i.pravatar.cc/150?img=${i + 1}`);
  
    fetch(UNSPLASH_API_URL)
      .then(response => response.json())
      .then(images => {
        fetch("https://jsonplaceholder.typicode.com/posts")
          .then(response => response.json())
          .then(posts => {
            posts.slice(0, 20).forEach((post, index) => {
              const article = document.createElement("article");
              article.classList.add("post");
  
              const userImage = images[index]?.urls.small || PLACEHOLDER_AVATARS[index];
              const userNames = [
                "Alex", "Jordan", "Taylor", "Morgan", "Riley", "Cameron", "Jamie", "Casey", "Avery", "Quinn",
                "Sydney", "Charlie", "Blake", "Peyton", "Drew", "Emerson", "Reese", "Dakota", "Skyler", "Logan"
              ];
              const randomName = userNames[index] || "User";
  
              article.innerHTML = `
                <img src="${userImage}" alt="${randomName}" class="user-icon">
                <div class="post-info">
                  <p><strong>${randomName}</strong> <span class="timestamp">Jan ${index + 1}, 2025</span></p>
                  <p>${post.body}</p>
                </div>
              `;
  
              postsContainer.appendChild(article);
            });
          })
          .catch(error => console.error("Error fetching posts:", error));
      })
      .catch(error => console.error("Error fetching images:", error));
  });
  