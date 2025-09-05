
// Old: fetch from jsonplaceholder
// fetch("https://jsonplaceholder.typicode.com/posts")

// New: fetch from local API
fetch("/api/posts")
  .then(res => res.json())
  .then(data => {
    console.log(data); // Render page
  });
