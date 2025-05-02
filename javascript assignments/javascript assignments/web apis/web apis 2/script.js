document.addEventListener('DOMContentLoaded', function() {
    const todoList = document.getElementById('to-do-list');
    const userSelect = document.getElementById('user-select');
    

    fetchTodos(userSelect.value);
    

    userSelect.addEventListener('change', function() {
        fetchTodos(this.value);
    });
    
    async function fetchTodos(userId) {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`);
            const todos = await response.json();
            displayTodos(todos);
        } catch (error) {
            console.error('Error fetching todos:', error);
            todoList.innerHTML = '<li>Failed to load to-do items. Please try again later.</li>';
        }
    }
    
    function displayTodos(todos) {
        todoList.innerHTML = '';
        
        todos.forEach(todo => {
            const li = document.createElement('li');
            li.className = 'todo-item';
            
            if (todo.completed) {
                li.classList.add('completed');
            }
            

            const checkbox = document.createElement('div');
            checkbox.className = 'checkbox';
            if (todo.completed) {
                checkbox.classList.add('checked');
            }
            
   
            const todoText = document.createElement('span');
            todoText.className = 'todo-text';
            todoText.textContent = todo.title;
            

            checkbox.addEventListener('click', function() {
                li.classList.toggle('completed');
                checkbox.classList.toggle('checked');
            });

            li.appendChild(checkbox);
            li.appendChild(todoText);
            todoList.appendChild(li);
        });
    }
});