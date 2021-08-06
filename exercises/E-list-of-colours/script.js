function listOfColours(colours) {
  let contents = document.querySelector("#content");

  let dropDownOptions = document.createElement("select");
  contents.appendChild(dropDownOptions);

  let resultText = document.createElement("p");
  contents.appendChild(resultText);

  colours.forEach((colour) => {
    let colourOption = document.createElement("option");
    dropDownOptions.appendChild(colourOption);
    colourOption.innerText = colour;

    colourOption.addEventListener("click", () => {
      resultText.innerText = colour;
      resultText.style.color = colour;
    });
  });
}

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
