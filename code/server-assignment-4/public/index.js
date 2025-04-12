document.addEventListener('DOMContentLoaded', () => {
    const todoList = document.getElementById('to-do-list');
    const userSelect = document.getElementById('user-select');

    // Fetch todos for the selected user
    async function fetchTodos() {
        const response = await fetch(`/todos`);

       
        const todos = await response.json();
        renderTodos(todos);
    }

    // Render todos on the page
    function renderTodos(todos) {
        todoList.innerHTML = ''; // Clear the list
        todos.forEach(todo => {
            const li = document.createElement('li');
            li.textContent = todo.title;

            // Style for completed todos
            if (todo.completed) {
                li.style.textDecoration = 'line-through';
                li.style.color = 'gray';
            }

            // Add a toggle button
            const toggleButton = document.createElement('button');
            toggleButton.textContent = '✓';
            toggleButton.style.cursor = 'pointer';
            toggleButton.onclick = () => {
                if (li.style.textDecoration === 'line-through') {
                    li.style.textDecoration = 'none';
                    li.style.color = '#e2e8f0';
                } else {
                    li.style.textDecoration = 'line-through';
                    li.style.color = 'gray';
                }
            };

            li.appendChild(toggleButton);
            todoList.appendChild(li);
        });
    }
    // Initial fetch for user 1
    fetchTodos();
});