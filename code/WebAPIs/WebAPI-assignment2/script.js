async function fetchData(){
  const response = await fetch('https://jsonplaceholder.typicode.com/todos?userId=6');
  const data = await response.json(); // this is an array of objects
  const list = document.getElementById('to-do-list'); 
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
}

fetchData();