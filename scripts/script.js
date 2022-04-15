// Упражнения 1 и 2

let phrases = [
  "Hello, I am the new Robot here",
  "I am a robot, I am here to help you",
  "I cant talk, yet",
  "How are you ? ",
  "I am fine, thank you",
  "I am not a robot, I am a human ",
  "My name is *blurred* - hehehe not yet.",
];

// Упражнение 1 => вкаран в html // <body onload="showAlert()"> //

let randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];

function showAlert() {
  setTimeout(() => {
    alert(randomPhrase);
  }, 3000);
}

// Упражнение 2

let Robots = [
  (robot1 = {
    name: "Robot1",
    color: "White",
    type: "male",
    frazichka: "",
  }),
  (robot2 = {
    name: "Robot2",
    color: "Black",
    type: "female",
    frazichka: "Hello, " + robot1.name,
  }),
];

let newRobots = [];

console.log(robot2.frazichka); // Тест дали работи

// Валидирането на формата започва от тук

const robotName = document.querySelector("#robot-name");
const robotType = document.querySelector("#robot-type");
const robotColor = document.querySelector("#colorSelector");
const form = document.querySelector("#form1");

form.addEventListener("submit", (e) => {
  if (robotName.value === "") {
    alert("Моля въведете име на робота");
    e.preventDefault();
  } else if (robotType.value === "" || robotType.value === "unselected") {
    alert("Моля въведете тип на робота");
    e.preventDefault();
  } else if (robotColor.value === "" || robotColor.value === "") {
    alert("Моля въведете цвят на робота");
    e.preventDefault();
  } else {
    let newRobot = {
      name: robotName.value,
      color: robotColor.value,
      type: robotType.value,
      frazichka: "Hello, " + robotName.value,
    };
    newRobots.push(newRobot);
    console.log(newRobot);
    alert("Вашият робот е готов!");
    e.preventDefault();
  }
});

form.addEventListener("reset", (e) => {
  if (newRobots) {
    alert(
      `Вашите роботи са: \n${newRobots.map(
        (robot) =>
         `\n         Name: ${robot.name} 
          \n         Color: ${robot.color} 
          \n         Type: ${robot.type} 
          \n ------------------------------- \n
         `
      )} `
    );
    e.preventDefault();
  }
});


// Упражнение 3

