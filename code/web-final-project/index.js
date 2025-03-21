// Get the card content element
const dataContent = document.getElementById("blog-list");
// console.log(dataContent);

// API URL
const apiUrl = "https://jsonplaceholder.typicode.com/posts";
// console.log(apiUrl);

// Fetch data from the API
fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    // Loop through the fetched data and create HTML elements
    const html = data
      .splice(0, 2)
      .map((item) => {
        return `
               

                 <div class="blog-post">
  <div class="imageContainer">
    <img
      src="assets/img/dashboard.png"
      alt=""
      width="400"
      height="250"
      class="blog-image"
    />
  </div>
  <div class="blog-content">
    <h1 class="blog-title">${item.title}</h1>
    <p class="blog-user">Written by Patutechz</p>
    <p class="blog-timestamp">07/03/2025</p>
    <p class="blog-desc">
    ${item.body}
    </p>
    <div
      style="
        display: flex;
        margin-top: 12px;
        justify-content: space-between;
        align-items: center;
      "
    >
      <img class="blog-user-img" src="./assets/img/me.jpg" />
      <a href="detail.html?id=${item.id}" class="read-more">Read More</a>
    </div>
  </div>
</div>
                
            `;
      })
      .join("");
    dataContent.innerHTML = html;
  })
  .catch((error) => console.error("Error:", error));
