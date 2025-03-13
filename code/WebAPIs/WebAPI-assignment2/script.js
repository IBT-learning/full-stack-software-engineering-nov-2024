async function fetchData(userId = 1){
  const list = document.getElementById('to-do-list'); 
  list.innerHTML = '';
  try{
    
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`);
    const data = await response.json(); // this is an array of objects
    let len = data.length; 
    
    for (let i = 0; i < len; i++){
      let listItem = document.createElement('li'); // individual items that will contain a btn and span
  
      const btn = document.createElement('button');
      const span = document.createElement('span');
      span.textContent = data[i].title
  
      if (data[i].completed){
        listItem.classList.add('completed');
        btn.classList.add('marked')
      }
  
      btn.addEventListener('click', function() {
        listItem.classList.toggle('completed');
        btn.classList.toggle('marked');
      })
  
      // append to <li> 
      listItem.appendChild(btn);
      listItem.appendChild(span);
  
      //  then append to <ul> 
      list.appendChild(listItem) 
    }
  }catch(error){
    list.innerHTML = 'Error loading data. Please try again.';
    console.error(error);
  }
}

document.addEventListener('DOMContentLoaded', function() {
  fetchData();
  
  let userOption = document.getElementById('userOption');

  userOption.addEventListener('change', function () {
      fetchData(this.value);
    });
  });