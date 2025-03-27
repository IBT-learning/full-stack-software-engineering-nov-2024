document.addEventListener("DOMContentLoaded", function () {
    const blogContainer = document.getElementById("blog-container");

    // Fetch blog posts from JSONPlaceholder API
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
        .then(response => response.json())
        .then(posts => {
            posts.forEach(post => {
                const postCard = `
                    <div class="col-md-6 col-lg-4">
                        <div class="card h-100 shadow-sm">
                            <div class="card-body">
                                <h5 class="card-title">${post.title}</h5>
                                <p class="card-text">${post.body}</p>
                            </div>
                        </div>
                </div>`;
                blogContainer.innerHTML += postCard;
            });
        })
        .catch(error => console.error("Error fetching posts:", error));
});