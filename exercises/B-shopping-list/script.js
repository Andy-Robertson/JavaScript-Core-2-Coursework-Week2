function shoppingList(items) {
  let contentList = document.querySelector("#content");

  items.forEach((item) => {
    let unordered = document.createElement("ul");
    contentList.appendChild(unordered);

    let list = document.createElement("li");
    unordered.appendChild(list);
    list.innerText = item;
  });
}

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);
