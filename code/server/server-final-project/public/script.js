async function fetchPosts() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();

    const appPosts = document.querySelectorAll('.post');
    const postsLength = appPosts.length;

    for (let i = 0; i < postsLength; i++) {
      const post = posts[i];
      console.log(post);
      
      if (!post) continue;

      // to change post content
      const textSection = appPosts[i].querySelector('.text');
      textSection.textContent = post.body;
    }
  } catch (error) {
    console.error('Failed to fetch posts:', error);
  }
}

fetchPosts();