async function fetchTodos() { 
    try {
        const userId = document.getElementById("userSelect").value; // Get selected user ID
        const url = `/api/todos?userId=${userId}`;

        const response = await fetch(url);
        const todos = await response.json();

        const todoList = document.getElementById("to-do-list"); 
        todoList.innerHTML = ""; // Clear existing items

        todos.forEach(todo => {
            const li = document.createElement("li");
            li.textContent = todo.title;

            if (todo.completed) {
                li.classList.add("completed");
            }

            li.addEventListener("click", () => {
                li.classList.toggle("completed");
            });

            todoList.appendChild(li);
        });
    } catch (error) {
        console.error("Error fetching todos:", error);
    }
}

// Fetch todos when the page loads
fetchTodos();

// Fetch todos when user ID input changes
document.getElementById("userSelect").addEventListener("input", fetchTodos);
