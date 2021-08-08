function populateTodoList(todos) {
  let list = document.querySelector("#todo-list");

  list.replaceChildren([]);

  // Renders and sets event listeners for todo list items using array of objects `todos`,
  todos.forEach((todo) => {
    let todoItem = document.createElement("li");
    list.appendChild(todoItem).className =
      "list-group-item d-flex justify-content-between align-items-center";
    todoItem.innerHTML = todo.task;

    let todoButtons = document.createElement("span");
    todoItem.appendChild(todoButtons);

    let doneToggle = document.createElement("i");
    todoButtons.appendChild(doneToggle).setAttribute("aria-hidden", "true");
    todoButtons.className = "badge bg-primary rounded-pill";
    doneToggle.className = "fa fa-check";

    doneToggle.addEventListener("click", () => {
      todo.completed = !todo.completed;
      populateTodoList(todos);
    });

    let deleteToggle = document.createElement("i");
    todoButtons.appendChild(deleteToggle).setAttribute("aria-hidden", "true");
    deleteToggle.className = "fa fa-trash";

    deleteToggle.addEventListener("click", () => {
      todos = todos.filter((todoObject) => {
        return todoObject.task != todo.task;
      });
      populateTodoList(todos);
    });

    if (todo.completed) {
      todoItem.style = "text-decoration: line-through green;";
    }
  });
}

let todos = [
  { task: "Wash the dishes", completed: true },
  { task: "Do the shopping", completed: false },
];

populateTodoList(todos);

// Adds new todo to the todos array of objects when the `#todoInput` button is pressed.
function addNewTodo(event) {
  event.preventDefault();

  let todoInput = document.querySelector("#todoInput");
  todos.push({ task: todoInput.value, completed: false });
  populateTodoList(todos);
  todoInput.value = "";
}

// Filters the todo array replacing the original todos array with only `completed` key values set to `false`.
function deleteAllCompletedTodos(event) {
  event.preventDefault();

  todos = todos.filter((todo) => {
    return !todo.completed;
  });
  populateTodoList(todos);
}
