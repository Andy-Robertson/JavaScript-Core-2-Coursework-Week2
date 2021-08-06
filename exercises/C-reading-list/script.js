function readingList(books) {
  let content = document.querySelector("#content");

  let unordered = document.createElement("ul");
  let pageTitle = document.createElement("h1");

  content.appendChild(pageTitle).style.textAlign = "center";
  pageTitle.innerText = "My Book List";

  content
    .appendChild(unordered)
    .setAttribute(
      "style",
      "display: flex; justify-content: space-around; flex-wrap: wrap; text-align: center;"
    );

  books.forEach((book) => {
    let list = document.createElement("li");

    unordered
      .appendChild(list)
      .setAttribute(
        "style",
        "width:26rem; margin-top: 2rem; display: flex; flex-direction: column;"
      );

    let paragraph = document.createElement("p");
    list.appendChild(paragraph);
    paragraph.innerText = `${book.title} - By ${book.author}`;

    // I realised it asked for a url to be linked in the readme but I thought it would be cool to add the link to the
    // books object array and have a local copy of the images, happy to redo with urls if required :)
    let image = document.createElement("img");
    list.appendChild(image);
    image.src = book.cover;

    if (book.alreadyRead) {
      list.style.background = "palegreen";
    } else {
      list.style.background = "crimson";
    }
  });
}

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
    cover: "img/The Design-Of-Everyday-Things.jpg",
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    cover: "img/The-Most-Human-Human-.jpg",
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
    cover: "img/The-Pragmatic-Programmer.jpg",
  },
];

readingList(books);
