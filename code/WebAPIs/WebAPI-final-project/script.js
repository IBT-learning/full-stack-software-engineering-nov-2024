// document.addEventListener('DOMContentLoaded', fetchPosts)

// async function fetchPosts(userId){
//   try{
//     const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`);
//     const responseObj = await response.json();
    
//     const appPosts = document.querySelectorAll('.text'); 
//     const postsLength = appPosts.length;
    
  
//     for (let i = 0; i < postsLength; i++){
//       appPosts[i].textContent = responseObj[i].body;


//     }
//   }catch(error){
//     console.error('Error:', error);
//   }
// }

// fetchPosts();

// document.addEventListener('DOMContentLoaded', fetchPosts);

// async function fetchPosts() {
//   try {
    
//     const appPosts = document.querySelectorAll('.text');
//     const usernames = document.querySelectorAll('.name');
//     const postsLength = appPosts.length;
    
//     for (let i = 1; i <= postsLength; i++) {
//       let userId = i * 10;
//       const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`);
//       const responseObj = await response.json();

//       appPosts[i-1].textContent = responseObj.body;

//       //user info for each post
//       const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${responseObj.userId}`);
//       const userObj = await userResponse.json();

//       usernames[i-1].textContent = userObj.username
//     }
//   } catch (error) {
//     console.error('Error:', error);
//   }
// }

document.addEventListener('DOMContentLoaded', fetchPosts);

async function fetchPosts() {
  try {
    
    const appPosts = document.querySelectorAll('.text');
    const usernames = document.querySelectorAll('.name');
    const postsLength = appPosts.length;
    console.log(postsLength)
    
    for (let i = 1; i <= postsLength; i++) {
      // let userId = i * 10;
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${i}`);
      const responseObj = await response.json(); // array of objects for each user
      console.log(responseObj)

      // appPosts[i-1].textContent = responseObj[i-1].body;

      // //user info for each post
      // const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${responseObj.userId}`);
      // const userObj = await userResponse.json();

      // usernames[i-1].textContent = userObj.username
    }
  } catch (error) {
    console.error('Error:', error);
  }
}