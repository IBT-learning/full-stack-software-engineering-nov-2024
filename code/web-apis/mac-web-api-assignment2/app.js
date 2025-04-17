const todoList = document.getElementById("to-do-list");
const userSelect = document.getElementById("user-select");

async function fetchTodos(userId) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos?userId=${userId}`
  );
  const todos = await res.json();

  todoList.innerHTML = ""; // clear existing items

  todos.forEach((todo) => {
    const li = document.createElement("li");
    li.textContent = todo.title;

    if (todo.completed) {
      li.classList.add("completed");
    }

    const toggleBtn = document.createElement("button");
    toggleBtn.textContent = todo.completed ? "Undo" : "Done";
    toggleBtn.className = "toggle";

    toggleBtn.addEventListener("click", () => {
      li.classList.toggle("completed");
      toggleBtn.textContent = li.classList.contains("completed")
        ? "Undo"
        : "Done";
    });

    li.appendChild(toggleBtn);
    todoList.appendChild(li);
  });
}

// initial load

fetchTodos(userSelect.value);

// change user

userSelect.addEventListener("change", () => {
  fetchTodos(userSelect.value);
});
