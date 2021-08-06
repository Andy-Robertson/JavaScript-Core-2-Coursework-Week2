let blueButton = document.querySelector("#blueBtn");
blueButton.style.cursor = "pointer";

let orangeButton = document.querySelector("#orangeBtn");
orangeButton.style.cursor = "pointer";

let greenButton = document.querySelector("#greenBtn");
greenButton.style.cursor = "pointer";

blueButton.addEventListener("click", () => {
  let jumbotron = document.querySelector(".jumbotron");
  jumbotron.style.background = "#588fbd";

  let donateABike = document.querySelector(".btn-lrg");
  donateABike.style.background = "#ffa500";

  let volunteer = document.querySelector(".btn-secondary");
  volunteer.style.background = "black";
  volunteer.style.color = "white";
});

orangeButton.addEventListener("click", () => {
  let jumbotron = document.querySelector(".jumbotron");
  jumbotron.style.background = " #f0ad4e";

  let donateABike = document.querySelector(".btn-lrg");
  donateABike.style.background = "#5751fd";

  let volunteer = document.querySelector(".btn-secondary");
  volunteer.style.background = "#31b0d5";
  volunteer.style.color = "white";
});

greenButton.addEventListener("click", () => {
  let jumbotron = document.querySelector(".jumbotron");
  jumbotron.style.background = "#87ca8a";

  let donateABike = document.querySelector(".btn-lrg");
  donateABike.style.background = "black";

  let volunteer = document.querySelector(".btn-secondary");
  volunteer.style.background = "#8c9c08";
  volunteer.style.color = "black";
});

let submit = document.querySelector('button[type="submit"]');
let email = document.querySelector("#exampleInputEmail1");
let name = document.querySelector("#example-text-input");
let describeYourself = document.querySelector("#exampleTextarea");

submit.addEventListener("click", (event) => {
  if (email.value === "" || !email.value.includes("@")) {
    email.style.backgroundColor = "red";
    event.preventDefault();
  } else if (name.value === "") {
    name.style.backgroundColor = "red";
    event.preventDefault();
  } else if (describeYourself.value === "") {
    describeYourself.style.backgroundColor = "red";
    event.preventDefault();
  } else {
    alert("Thanks for completing the form!");
    name.value = "";
    email.value = "";
    describeYourself.value = "";
  }
});
