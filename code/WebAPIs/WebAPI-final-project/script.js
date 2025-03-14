document.addEventListener('DOMContentLoaded', fetchPosts)

async function fetchPosts(){
  try{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const responseObj = await response.json();
  
    const appPosts = document.querySelectorAll('.text');
    const postsLength = appPosts.length;
    
  
    for (let i = 0; i < postsLength; i++){
      appPosts[i].textContent = responseObj[i].body;
    }
  }catch(error){
    console.error('Error:', error);
  }
}

// fetchPosts();