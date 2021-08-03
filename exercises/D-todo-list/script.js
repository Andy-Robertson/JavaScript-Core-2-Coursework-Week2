function todoList(todos) {
  let content = document.querySelector("#content");
  let unordered = document.createElement("ul");

  content
    .appendChild(unordered)
    .setAttribute("style", "display: flex-column; justify-content: center");

  todos.forEach((todoEntry) => {
    let list = document.createElement("li");
    unordered
      .appendChild(list)
      .setAttribute(
        "style",
        "display: flex; justify-content: center; margin: 0.5rem; width:12rem; background-color: #87ca8a; cursor: pointer"
      );
    list.innerText = todoEntry.todo;

    list.addEventListener("click", () => {
      if (list.style.textDecoration === "none") {
        list.style.textDecoration = "line-through wavy red";
      } else {
        list.style.textDecoration = "none";
      }
    });
  });
}

const todos = [
  { todo: "wash the dishes" },
  { todo: "walk the dog" },
  { todo: "learn javascript" },
  { todo: "go shopping" },
];

todoList(todos);
