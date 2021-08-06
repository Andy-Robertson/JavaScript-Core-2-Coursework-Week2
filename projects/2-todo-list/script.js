function populateTodoList(todos) {
  let list = document.querySelector("#todo-list");
  // Write your code to create todo list elements with completed and delete buttons here,
  // all todos should display inside the "todo-list" element.

  todos.forEach((todo) => {
    let todoItem = document.createElement("li");
    let todoButtons = document.createElement("span");
    let doneToggle = document.createElement("i");
    let deleteToggle = document.createElement("i");

    list.appendChild(todoItem).className =
      "list-group-item d-flex justify-content-between align-items-center";

    todoItem.innerHTML = todo.task;
    todoItem.appendChild(todoButtons);

    todoButtons.appendChild(doneToggle).setAttribute("aria-hidden", "true");
    todoButtons.className = "badge bg-primary rounded-pill";
    doneToggle.className = "fa fa-check";

    todoButtons.appendChild(deleteToggle).setAttribute("aria-hidden", "true");
    deleteToggle.className = "fa fa-trash";

    doneToggle.addEventListener("click", () => {
      if (todoItem.style.textDecoration === "none") {
        todoItem.style.textDecoration = "line-through wavy red";
      } else {
        todoItem.style.textDecoration = "none";
      }
    });

    deleteToggle.addEventListener("click", () => {
      if ((list.style.textDecoration = "line-through wavy red")) {
        list.removeChild(todoItem);
      }
    });
  });
}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

populateTodoList(todos);

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list.
// These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
  let todoInput = document.querySelector("#todoInput");

  let newTodo = [{ task: todoInput.value, completed: false }];

  todos.push(newTodo[0]);
  populateTodoList(newTodo);
  todoInput.value = "";
}

// Advanced challenge: Write a function that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).

// This stumped me for a while, I set out the basic function without much trouble, but I couldn't figure out how to iterate over all the li
// until I realised querySelectorAll() and not just querySelector() was needed as it returns a full NodeList of the matching DOM elements (li's).
function deleteAllCompletedTodos(event) {
  event.preventDefault();
  let todoItems = document.querySelectorAll("li");
  let list = document.querySelector("#todo-list");

  todoItems.forEach((todoItem) => {
    if (todoItem.style.textDecoration === "line-through wavy red") {
      list.removeChild(todoItem);
    }
  });
}
