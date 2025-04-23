async function fetchTodos() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos?userId=1');
      const todos = await response.json();
  
      const list = document.getElementById('to-do-list');
  
      todos.forEach(todo => {
        const listItem = document.createElement('li');
        listItem.textContent = todo.title;
  
        if (todo.completed) {
          listItem.classList.add('completed');
        }
  
        list.appendChild(listItem);
      });
    } catch (error) {
      console.error('Error fetching to-dos:', error);
    }
  }
  
  // Call the function
  fetchTodos();