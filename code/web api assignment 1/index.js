// Selecting elements from the HTML
const userSelect = document.getElementById("userSelect");
const todoList = document.getElementById("to-do-list");

// Function to fetch and display to-do items
async function fetchTodos(userId) {
    try {
        // Fetch data from API
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`);
        const todos = await response.json();

        // Clear previous to-do items
        todoList.innerHTML = "";

        // Loop through fetched to-dos
        todos.forEach(todo => {
            const li = document.createElement("li");
            li.textContent = todo.title;

            // Mark completed tasks
            if (todo.completed) {
                li.classList.add("completed");
            }

            // Toggle completed status when clicked
            li.addEventListener("click", () => {
                li.classList.toggle("completed");
            });

            todoList.appendChild(li);
        });
    } catch (error) {
        console.error("Error fetching todos:", error);
    }
}

// Listen for user ID changes and fetch new to-dos
userSelect.addEventListener("change", () => {
    fetchTodos(userSelect.value);
});

// Load to-dos for default user ID 1
fetchTodos(1);
