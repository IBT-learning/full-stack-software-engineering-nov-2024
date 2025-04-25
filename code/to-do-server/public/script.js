async function fetchTodos() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos?userId=1');
        const todos = await response.json();
        const todoList = document.getElementById('to-do-list');

        todos.forEach(todo => {
            const li = document.createElement('li');
            li.textContent = todo.title;

            if (todo.completed) {
                li.style.textDecoration = 'line-through';
                li.style.color = 'gray';
            }

            todoList.appendChild(li);
        });
    } catch (error) {
        console.error('Error fetching todos:', error);
    }
}

fetchTodos();
