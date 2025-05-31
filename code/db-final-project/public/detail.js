// Get the details card element
const detailsCard = document.getElementById('details-card');

// Get the ID from the URL query string
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

// API URL
const apiUrl = `/api/posts/${id}`;

// Fetch data from the API
fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        // Display the details data
        detailsCard.innerHTML = `
        <div class="imageContainer">
          <img
            src="${data.image}"
            alt=""
            width="400"
            height="100"
            class="blog-image"
          />
        </div>
        <div class="blog-content">
          <h1 class="blog-title">${data.title}</h1>
                    <div
            style="
              display: flex;
              margin-top: 12px;
              justify-content: space-between;
              align-items: center;
            "
          >
            <img class="blog-user-img" src="./assets/img/me.jpg" />
            <p class="blog-user">Written by Patutechz</p>
          </div>
          <p class="blog-timestamp" style="margin-top: 10px;">07/03/2025</p>
          <p class="blog-desc">
                      <h1 class="blog-title">${data.body}</h1>

          </p>
        </div>
        `;
    })
    .catch(error => console.error('Error:', error));