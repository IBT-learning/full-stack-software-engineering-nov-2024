// Get DOM elements
const todoList = document.getElementById('to-do-list');
const userSelect = document.getElementById('user-select');

// Load todos when page loads
document.addEventListener('DOMContentLoaded', () => {
    loadTodos();
});

// Listen for user selection change
userSelect.addEventListener('change', () => {
    loadTodos();
});

// Async function to fetch and display todos
async function loadTodos() {
    try {
        // Show loading message
        todoList.innerHTML = '<li class="loading">Loading todos...</li>';
        
        // Get selected user
        const userId = userSelect.value;
        
        // Fetch todos from our custom endpoint
        const response = await fetch(`/api/todos?userId=${userId}`);
        
        if (!response.ok) {
            throw new Error('Failed to fetch todos');
        }
        
        const todos = await response.json();
        
        // Clear the list
        todoList.innerHTML = '';
        
        // Create list items for each todo
        todos.forEach(todo => {
            createTodoItem(todo);
        });
        
    } catch (error) {
        console.error('Error loading todos:', error);
        todoList.innerHTML = '<li class="loading">Error loading todos. Please try again.</li>';
    }
}

// Function to create a todo item
function createTodoItem(todo) {
    // Create list item
    const li = document.createElement('li');
    
    // Add completed class if todo is completed
    if (todo.completed) {
        li.classList.add('completed');
    }
    
    // Create todo text span
    const todoText = document.createElement('span');
    todoText.textContent = todo.title;
    todoText.classList.add('todo-text');
    
    // Create toggle button
    const toggleBtn = document.createElement('button');
    toggleBtn.textContent = todo.completed ? 'Undo' : 'Complete';
    toggleBtn.classList.add('toggle-btn');
    
    // Add click event to toggle button
    toggleBtn.addEventListener('click', () => {
        toggleTodoComplete(li, toggleBtn);
    });
    
    // Append elements to list item
    li.appendChild(todoText);
    li.appendChild(toggleBtn);
    
    // Append list item to todo list
    todoList.appendChild(li);
}

// Function to toggle todo completion status
function toggleTodoComplete(listItem, button) {
    listItem.classList.toggle('completed');
    
    if (listItem.classList.contains('completed')) {
        button.textContent = 'Undo';
    } else {
        button.textContent = 'Complete';
    }
}