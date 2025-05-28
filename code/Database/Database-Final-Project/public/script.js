async function fetchPosts() {
  try {
    const response = await fetch('http://127.0.0.1:4500/posts');
    const posts = await response.json();

    const container = document.querySelector('main');
    container.innerHTML = ''; // clear previous HTML hardcoded content

    for (const post of posts) {
      const postElement = document.createElement('section');
      postElement.classList.add('post');

      const profilePhoto = document.createElement('img');
      profilePhoto.src = 'images/profile1.jpg';
      profilePhoto.classList.add('profilePic');

      const username = document.createElement('p');
      username.classList.add('username');
      username.innerHTML = '<span class="name"> Username <span>'


      const title = document.createElement('h4');
      title.textContent = post.title;

      const body = document.createElement('p');
      body.classList.add('text');
      body.textContent = post.body;

      const reactions = document.createElement('div');
      reactions.classList.add('reactions');
      reactions.innerHTML = `
        <img src="images/thumb_up.png" alt="thumb-up icon" class="react">
        <p>25</p>
        <img src="images/thumb_down.png" alt="thumb-down icon" class="react">
      `;

      const comment = document.createElement('p');
      comment.classList.add('comment');
      comment.textContent = 'Comments';

      postElement.appendChild(username);
      postElement.appendChild(profilePhoto);
      postElement.appendChild(title);
      postElement.appendChild(body);
      postElement.appendChild(reactions);
      postElement.appendChild(comment);

      container.appendChild(postElement);
      
}
  } catch (error) {
    console.error('Failed to fetch posts:', error);
  }
}

fetchPosts();