let blueButton = document.querySelector("#blueBtn");
let orangeButton = document.querySelector("#orangeBtn");
let greenButton = document.querySelector("#greenBtn");

blueButton.addEventListener("click", () => {
  let jumbotron = document.querySelector(".jumbotron");
  let donateABike = document.querySelector(".btn-lrg");
  let volunteer = document.querySelector(".btn-secondary");
  jumbotron.style.background = "#588fbd";
  donateABike.style.background = "#ffa500";
  volunteer.style.background = "black";
  volunteer.style.color = "white";
});

orangeButton.addEventListener("click", () => {
  let jumbotron = document.querySelector(".jumbotron");
  let donateABike = document.querySelector(".btn-lrg");
  let volunteer = document.querySelector(".btn-secondary");
  jumbotron.style.background = " #f0ad4e";
  donateABike.style.background = "#5751fd";
  volunteer.style.background = "#31b0d5";
  volunteer.style.color = "white";
});

greenButton.addEventListener("click", () => {
  let jumbotron = document.querySelector(".jumbotron");
  let donateABike = document.querySelector(".btn-lrg");
  let volunteer = document.querySelector(".btn-secondary");
  jumbotron.style.background = "#87ca8a";
  donateABike.style.background = "black";
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
