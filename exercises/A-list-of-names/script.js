// The Ah-Ha! moment on tying it all together was amazing!!
// Sorry I didn't stick to the user story but, I had fun experimenting :)

function listOfNames(arrayOfPeople) {
  let content = document.querySelector("#content");

  arrayOfPeople.forEach((person) => {
    let name = document.createElement("h1");
    content.appendChild(name);
    name.innerText = `My name is ${person.name}`;
    name.style.color = "Green";

    let job = document.createElement("h2");
    content.appendChild(job);
    job.innerText = `And Im a ${person.job}`;
    job.style.color = "Orange";
  });
}

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

listOfNames(people);
