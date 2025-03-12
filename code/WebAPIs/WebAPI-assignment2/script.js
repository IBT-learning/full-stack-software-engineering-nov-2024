async function fetchData(){
  const response = await fetch('https://jsonplaceholder.typicode.com/todos?userId=6');
  const data = await response.json(); // this is an array of objects
  const list = document.getElementById('to-do-list'); 
  let len = data.length; 
  
  for (let i = 0; i < len; i++){
    let item = document.createElement('li');
    item.textContent = data[i].title

    list.appendChild(item) 

    if (data[i].completed){
      item.classList.add('completed');
    }
  }

}

fetchData();