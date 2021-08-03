// The Ah-Ha! moment on tying it all together was amazing!!
// Sorry I didn't stick to the user story but, I had fun experimenting :)

function listOfNames(arrayOfPeople) {
  let content = document.querySelector("#content");

  arrayOfPeople.forEach((person) => {
    let name = document.createElement("h1");
    let job = document.createElement("h2");
    content.appendChild(name);
    content.appendChild(job);
    name.innerText = `My name is ${person.name}`;
    job.innerText = `And Im a ${person.job}`;
    name.style.color = "Green";
    job.style.color = "Orange";
  });
}

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

listOfNames(people);
