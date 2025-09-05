async function loadTodos() {
  const response = await fetch("/todos"); // local endpoint
  const todos = await response.json();

  const list = document.getElementById("todo-list");
  list.innerHTML = "";

  todos.forEach(todo => {
    const li = document.createElement("li");
    li.textContent = `${todo.title} - ${todo.completed ? "✅" : "❌"}`;
    list.appendChild(li);
  });
}

document.addEventListener("DOMContentLoaded", loadTodos);
