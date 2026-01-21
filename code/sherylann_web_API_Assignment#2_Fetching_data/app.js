const list = document.getElementById("to-do-list");
const select = document.getElementById("user-select");
const label = document.getElementById("user-id-label");

select.addEventListener("change", () => {
  const userId = select.value;
  label.textContent = userId;
  loadToDos(userId);
});

async function loadToDos(userId = 1) {
  list.innerHTML = "<li>Loading...</li>";
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`);
  const todos = await res.json();

  list.innerHTML = "";
  todos.forEach(todo => {
    const li = document.createElement("li");
    li.className = "todo-item";
    li.textContent = todo.title;

    if (todo.completed) li.classList.add("completed");

    const btn = document.createElement("button");
    btn.className = "toggle-btn";
    btn.textContent = todo.completed ? "Undo" : "Done";

    btn.addEventListener("click", () => {
      li.classList.toggle("completed");
      btn.textContent = li.classList.contains("completed") ? "Undo" : "Done";
    });

    li.appendChild(btn);
    list.appendChild(li);
  });
}

loadToDos(1);
