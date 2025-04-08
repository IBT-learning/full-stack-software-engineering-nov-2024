async function fetchPosts(){
  try{
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`); 
    
    const responseObj = await response.json(); 
    console.log(responseObj);
    
    const appPosts = document.querySelectorAll('.post'); 
    const postsLength = appPosts.length;
  
    for (let i = 0; i < postsLength; i++){
      // to change the post content
      const textSection = appPosts[i].querySelector('.text');
      textSection.textContent = responseObj[i].body;

      // to change the username
      const userName = await fetch(`https://jsonplaceholder.typicode.com/users/${(i+1)}`);
      const userNameObj = await userName.json();
  
      const nameSpan = appPosts[i].querySelector('.name');
      nameSpan.textContent = userNameObj.username;
    }
  }catch(error){
    console.error('Failed to fetch posts:', error);
  }
}

fetchPosts();