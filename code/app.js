const toDoList = document.getElementById("to-do-list");
const userInput = document.getElementById("user-select");

// Fetch and display to-dos for a given user
async function loadTodos(userId) {
  toDoList.innerHTML = ""; // Clear current list

  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`);
    const todos = await response.json();

    todos.forEach(todo => {
      const li = document.createElement("li");
      li.textContent = todo.title;

      // If already completed, mark it
      if (todo.completed) {
        li.classList.add("completed");
      }

      // Add a check/uncheck button
      const btn = document.createElement("button");
      btn.textContent = todo.completed ? "Undo" : "Done";
      btn.className = "check-btn";

      btn.addEventListener("click", () => {
        li.classList.toggle("completed");
        btn.textContent = li.classList.contains("completed") ? "Undo" : "Done";
      });

      li.appendChild(btn);
      toDoList.appendChild(li);
    });

  } catch (error) {
    toDoList.innerHTML = "<li>Error loading to-dos. Please try again later.</li>";
    console.error("Failed to fetch to-dos:", error);
  }
}

// Initial load
loadTodos(userInput.value);

// Reload on input change
userInput.addEventListener("change", () => {
  const userId = parseInt(userInput.value);
  if (userId >= 1 && userId <= 10) {
    loadTodos(userId);
  }
});
