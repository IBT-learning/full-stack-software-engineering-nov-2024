const toDoList = document.getElementById('to-do-list');
    const userIdInput = document.getElementById('userId');

    // Fetch and display to-dos
    async function fetchTodos(userId) {
      toDoList.innerHTML = 'Loading...';
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`);
        const todos = await response.json();
        displayTodos(todos);
      } catch (error) {
        toDoList.innerHTML = 'Error fetching data';
      }
    }

    // Display to-dos in the list
    function displayTodos(todos) {
      toDoList.innerHTML = '';
      todos.forEach(todo => {
        const li = document.createElement('li');
        li.textContent = todo.title;

        // If completed, style it
        if (todo.completed) {
          li.classList.add('completed');
        }

        // Add toggle button
        const btn = document.createElement('button');
        btn.textContent = '✔';
        btn.addEventListener('click', () => {
          li.classList.toggle('completed');
        });

        li.appendChild(btn);
        toDoList.appendChild(li);
      });
    }

    // Initial load
    fetchTodos(userIdInput.value);

    // Listen for user change
    userIdInput.addEventListener('input', () => fetchTodos(userIdInput.value));