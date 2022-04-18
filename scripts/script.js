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
let createdRobots = [];

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
const small = document.querySelector("small");

// добавя класа d-none (display: none) на секцията с роботчето, при зареждане на страницата

function changeClassOnLoad() {
  robotSectionOne.className = robotSectionOne.className + " d-none";
}

// create new dynamic section with robot every time we submit the form

function createRobot() {
  if (newRobots && newRobots.length > 0) {
    newRobots.forEach((robotche) => {
      
      // Ако роботчето е женско, му слагаме клас skirt (пола)

      if (robotche.type === "female-robot" || robotche.type === "Female") {
        let newRobotSection = document.createElement("section");
        newRobotSection.className = "container-1";
        newRobotSection.id = `robot-section-${newRobots.indexOf(robotche) + 1}`;
        body.appendChild(newRobotSection);
        body.insertBefore(newRobotSection, robotSectionOne);
        let newRobotDiv = newRobotSection.appendChild(
          document.createElement("div")
        );
        newRobotDiv.className = "testche";
        newRobotSection.innerHTML += `
      <div class="ribbon-vertical">
      <div id="ribbon-text">${robotche.type}</div></div>
      <div class="robot-container">
        <div class="robot-drawing">
          <div class="robot-head">
            <div class="mouth"></div>
            <div class="eyes">
              <div class="eyes-1"></div>
              <div class="eyes-2"></div>
            </div>
          </div>
          <div class="chest-container">
            <div class="left-arm"></div>
            <div class="body" style="
              border-top: 10vmin solid ${robotche.color};
              border-left: 2vmin solid transparent;
              border-right: 2vmin solid transparent;
            }"></div>
            <div class="right-arm"></div>
          </div>
          <div class="skirt"></div>
          <span class="left-leg-skirt"> </span>
          <span class="right-leg-skirt"> </span>
         
            <h4 id="robot-name-h4" style="margin-top: 1rem">${robotche.name}</h4>
          
          
          
        </div>
      </div>
      <div class="paragraphs">
        <section>
          <p id="para-1">
            <strong>P</strong>aragraph text here. Text-align on left, 3% space from right border.
            Text is only 2 lines and ends with three dots ... Because its too
            long. On hover full text is shown as tooltip. First letter is bold.
          </p>
          <p id="para-2">
            <span id="italic">Paragraph</span> text here. Text justified, 6% space from right border.
            Text is only 2 lines and ends with three dots ... Because its too
            long. On hover full text is shown. First word is Italic.
          </p>
          <p id="para-3">
            <img src="./images/goodluck.jpg" alt="Goodluck Image" class="goodluck-img" />
            Paragraph text here. Text-align on left, 9 % from right border.
            Image on left side.
          </p>
         
        </section>
        
      </div>
      
    </section>
      `;
      // Ако роботчето е мъжко
      } else {
        let newRobotSection = document.createElement("section");
        newRobotSection.className = "container-1";
        newRobotSection.id = `robot-section-${newRobots.indexOf(robotche) + 1}`;
        body.appendChild(newRobotSection);
        body.insertBefore(newRobotSection, robotSectionOne);
        let newRobotDiv = newRobotSection.appendChild(
          document.createElement("div")
        );
        newRobotDiv.className = "testche";
        newRobotSection.innerHTML += `
    <div class="ribbon-vertical">
    <div id="ribbon-text">${robotche.type}</div></div>
    <div class="robot-container">
      <div class="robot-drawing">
        <div class="robot-head">
          <div class="mouth"></div>
          <div class="eyes">
            <div class="eyes-1"></div>
            <div class="eyes-2"></div>
          </div>
        </div>
        <div class="chest-container">
          <div class="left-arm"></div>
          <div class="body" style="
            border-top: 10vmin solid ${robotche.color};
            border-left: 2vmin solid transparent;
            border-right: 2vmin solid transparent;
          }"></div>
          <div class="right-arm"></div>
        </div>
        <div class="legs">
          <div class="left-leg"></div>
          <div class="right-leg"></div>
        </div>
       
          <h4 id="robot-name-h4">${robotche.name}</h4>
        
        
        
      </div>
    </div>
    <div class="paragraphs">
      <section>
        <p id="para-1">
          <strong>P</strong>aragraph text here. Text-align on left, 3% space from right border.
          Text is only 2 lines and ends with three dots ... Because its too
          long. On hover full text is shown as tooltip. First letter is bold.
        </p>
        <p id="para-2">
          <span id="italic">Paragraph</span> text here. Text justified, 6% space from right border.
          Text is only 2 lines and ends with three dots ... Because its too
          long. On hover full text is shown. First word is Italic.
        </p>
        <p id="para-3">
          <img src="./images/goodluck.jpg" alt="Goodluck Image" class="goodluck-img" />
          Paragraph text here. Text-align on left, 9 % from right border.
          Image on left side.
        </p>
       
      </section>
      
    </div>
    
  </section>
    `;
      }
    });
  }
}
