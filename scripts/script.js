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
    color: "black",
    type: "male",
    frazichka: "",
  }),
  (robot2 = {
    name: "Robot2",
    color: "black",
    type: "female",
    frazichka: "Hello, " + robot1.name,
  }),
];

console.log(robot2.frazichka); // Тест дали работи 
