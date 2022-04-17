// Упражнения 1 и 2

let phrases = [
  "Hello, I am the new Robot here",
  "I am a robot, I am here to help you",
  "I cant talk, yet",
  "How are you ? ",
  "I am fine, thank you",
  "I am not a robot, I am a human ",
  `My name is *blurred* - hehehe not yet.`,
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
    newRobots.unshift(newRobot);
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
         `\n        Name: ${robot.name} 
          \n        Color: ${robot.color} 
          \n        Type: ${robot.type} 
          \n ------------------------------- \n
         `
      )} `
    );
    e.preventDefault();
  }
});

// Упражнение 2 - JS DOM Manipulations

// При зареждане на страницата вече не трябва да имаме предифиниран робот.
// Първоначално ще се вижда само формата.
// Робота ще трявба да се изгражда динамично спрямо данни от обект.
// След всеки събмит на формата ще трябва да се вика функция, която да създава нова секция с робот.
// Секцията обхваща цялата горна част под логото на PlayTech до формата.
// Включително и параграфите и рибона с текст.
// Спрямо данните в обекта робота ще се генерира автоматично като преизползва DOM структурата,
// която имате в момента.
// Полето с името на робота вече ще е заместено със стойността от формата.
// Робота ще има два варианта – мъжки и женски.
// Женския може да има поличка, по което да се различава от мъжкия (вече съществуващия ни робот).
// Цвета на тялото му ще се определя също от стойността, която е въведена при създаването.
// Текста в рибона ще е спрямо типа – „Male Robot“ , “Female Robot”.

const body = document.querySelector("body");
const robotSectionOne = document.querySelector("#robot-section-1");
const robotDrawing = document.querySelector("robot-drawing");

// добавя класа d-none (display: none) на секцията с роботчето, при зареждане на страницата

function changeClassOnLoad() {
  robotSectionOne.className = robotSectionOne.className + " d-none";
}

// create new dynamic section with robot every time we submit the form

function createRobot() {

  if (newRobots !== undefined || newRobots !== null) {
    newRobots.map((robotche) => {
    let newRobotSection = document.createElement("section");
    newRobotSection.className = "container-1";
    newRobotSection.id = `robot-section-${newRobots.indexOf(robotche)}`;
    body.appendChild(newRobotSection);
    body.insertBefore(newRobotSection, robotSectionOne);
    let newRobotDiv = newRobotSection.appendChild(document.createElement("div"));
    newRobotDiv.className = "robot-drawing";
    newRobotDiv.id = "robot-drawing";
    newRobotSection.innerHTML = `<div class="ribbon-vertical">
    <div id="ribbon-text"> ${robotche.type} </div> </div>`;
    newRobotSection.innerHTML += `<div class="robot-container">`;
    newRobotSection.innerHTML += `<div class="robot-head">
    <div class="mouth"></div>

    <div class="eyes">
      <div class="eyes-1"></div>
      <div class="eyes-2"></div>
    </div>
  </div>` ;
   
    });
  
}
}


