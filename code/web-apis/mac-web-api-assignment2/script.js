// select DOM element for the to-do list and the user selector

const todoListElement = document.getElementById("to-do-list");

const userSelector = document.getElementById("user-select");

// bring in Async function to fetch to-do from the API for a specific user

async function fetchTodos(userId) {
  try {
    // fetch data from the API (using JSONPlaceholder)

    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos?userId=${userId}`
    );

    const todos = await response.json();
    renderTodos(todos);
  } catch (error) {
    console.error("Error fetching todos:", error);
    todoListElement.innerHTML =
      "<li>Error fetching data. Please try again.<li>";
  }
}

// function to render the to-do items on the page

function renderTodos(todos) {
  // clear the previous list before rendering new items

  todoListElement.innerHTML = "";

  // iterate over each todo item and create an <li> element

  todos.forEach((todo) => {
    const li = document.createElement("li");

    // set the text of the list item

    li.textContent = todo.title;

    if (todo.completed) {
      li.classList.add("completed");
    }

    // Add event listener to toggle the completed style on click (extra challenge)

    li.addEventListener("click", () => {
      li.classList.toggle("completed");
    });

    // Append the <li> to the <ul>

    todoListElement.appendChild(li);
  });
}

// initial fetch for the defult selected user (User 1)

fetchTodos(userSelector.value);

// Listen for changes on the user selected to fetch new to-dos

userSelector.addEventListener("change", () => {
  const selectedUserId = userSelector.value;

  fetchTodos(selectedUserId);
});
