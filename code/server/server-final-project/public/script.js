async function fetchPosts() {
  try {
    const response = await fetch('http://127.0.0.1:3001/api/posts');
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

      // to change post titles
      const title = appPosts[i].querySelector('h4');
      title.textContent = post.title;
    }
  } catch (error) {
    console.error('Failed to fetch posts:', error);
  }
}

fetchPosts();