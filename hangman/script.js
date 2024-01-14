const hangmanWords = [
  { word: "SUN", hint: "The source of light and warmth for our planet." },
  { word: "GUITAR", hint: "A stringed musical instrument." },
  {
    word: "PIZZA",
    hint: "A popular Italian dish with dough, sauce, and toppings.",
  },
  {
    word: "SCREEN",
    hint: "The part of a device where information is displayed.",
  },
  {
    word: "AVIATION",
    hint: "The general term for aviation technologies and flights.",
  },
  {
    word: "LIBRARY",
    hint: "A place where books are stored and provided for reading.",
  },
  {
    word: "ASTRONOMY",
    hint: "The science that studies celestial bodies and cosmic phenomena.",
  },
  { word: "CHOCOLATE", hint: "A sweet product made from cocoa and sugar." },
  {
    word: "ROBOT",
    hint: "A machine capable of performing various tasks automatically.",
  },
  {
    word: "JOURNEY",
    hint: "The act of moving from one place to another, typically for leisure or exploration.",
  },
];

const countOfError = function () {
  counterTry += 1;
  tryForGuess.textContent = `${counterTry} / 6`;
  paintHangman(counterTry);
};

const body = document.querySelector("body");
body.insertAdjacentHTML(
  "beforeend",
  `        <div class="container">
  <div class="hangman">
    <div class="hangman__game-proccess">
      <img src="src/gallows.svg" alt="gallows" class="gallows"/>
      <img
        src="src/hangman-head.svg"
        alt="hangaman head"
        class="hangman-head hidden"
      />
      <img
        src="src/hangman-body.svg"
        alt="hangman body"
        class="hangman-body hidden"
      />
      <img
        src="src/hangman-arm-left.png"
        alt="hangaman left arm"
        class="hangman-arm-left hidden"
      />
      <img
        src="./src/hangman-arm-right.png"
        alt="hangman arm right"
        class="hangman-arm-right hidden"
      />
      <img
        src="./src/hangman-leg-left.png"
        alt="hangman left leg"
        class="hangman-leg-left hidden"
      />
      <img
        src="./src/hangman-leg-right.png"
        alt="hangman leg right"
        class="hangman-leg-right hidden"
      />
    </div>
    <div class="hangman__header"></div>
  </div>
  <div class="hangman-guess">
    <div class="hangman-guess__tabs">
      
    </div>
    <div class="hangman-guess__hint text">
      Hint: A popular Italian dish with dough, sauce, and toppings.
    </div>
    <div class="hangman-guess__counter text">
      Try: <span style="color: red" class="counter">0 / 6</span>
    </div>
    <div class="keyboard">
      <div class="keyboard__row">
        <div class="keyboard__letter">A</div>
        <div class="keyboard__letter">B</div>
        <div class="keyboard__letter">C</div>
        <div class="keyboard__letter">D</div>
        <div class="keyboard__letter">E</div>
        <div class="keyboard__letter">F</div>
        <div class="keyboard__letter">G</div>
        <div class="keyboard__letter">H</div>
        <div class="keyboard__letter">I</div>
      </div>
      <div class="keyboard__row">
        <div class="keyboard__letter">J</div>
        <div class="keyboard__letter">K</div>
        <div class="keyboard__letter">L</div>
        <div class="keyboard__letter">M</div>
        <div class="keyboard__letter">N</div>
        <div class="keyboard__letter">O</div>
        <div class="keyboard__letter">P</div>
        <div class="keyboard__letter">Q</div>
        <div class="keyboard__letter">R</div>
      </div>
      <div class="keyboard__row">
        <div class="keyboard__letter">S</div>
        <div class="keyboard__letter">T</div>
        <div class="keyboard__letter">U</div>
        <div class="keyboard__letter">V</div>
        <div class="keyboard__letter">W</div>
        <div class="keyboard__letter">X</div>
        <div class="keyboard__letter">Y</div>
        <div class="keyboard__letter">Z</div>
      </div>
    </div>
  </div>
</div>

<div class="modal-wrapper hidden">
  <div class="modal">
    <h1 class="modal-header text">Your win!</h1>
    <div class="modal__button-again">Play Again</div>
  </div>
</div>`
);

const startGame = () => {
  modal.classList.add("hidden");
  counterTry = 0;
  tryForGuess.textContent = `${counterTry} / 6`;
  gameResult = "";
  randomInt = Math.floor(Math.random(0, 9) * 10);
  hiddenWord = hangmanWords[randomInt].word;
  tabsContainer.innerHTML = "";
  for (let i = 0; i < hiddenWord.length; i++) {
    tabsContainer.insertAdjacentHTML("beforeend", `<div class="tab"></div>`);
  }
  hint.textContent = `Hint: ${hangmanWords[randomInt].hint}`;
  tabs = document.querySelectorAll(".tab");
  lengthOfTabs = tabs.length;
  console.log(hiddenWord);
  for (i = 1; i < listOfHanfman.length; i++) {
    listOfHanfman[i].classList.add("hidden");
  }
};

const hangmanGameProccess = document.querySelector(".hangman__game-proccess");
const listOfHanfman = hangmanGameProccess.children;
console.log(listOfHanfman);

const modal = document.querySelector(".modal-wrapper");
const modalHeader = document.querySelector(".modal-header");
let counterTry = 0;
let gameResult = "";
const tryForGuess = document.querySelector(".counter");
let randomInt = Math.floor(Math.random(0, 9) * 10);
let hiddenWord = hangmanWords[randomInt].word;
const tabsContainer = document.querySelector(".hangman-guess__tabs");
for (let i = 0; i < hiddenWord.length; i++) {
  tabsContainer.insertAdjacentHTML("beforeend", `<div class="tab"></div>`);
}
const hint = document.querySelector(".hangman-guess__hint");
hint.textContent = `Hint: ${hangmanWords[randomInt].hint}`;
let tabs = document.querySelectorAll(".tab");

console.log(hiddenWord);

const keywords = document.querySelectorAll(".keyboard__letter");
let lengthOfTabs = tabs.length;

for (let i = 0; i < keywords.length; i++) {
  keywords[i].addEventListener("click", function () {
    console.log(lengthOfTabs);
    let position = function (mainString, subString) {
      let indexes = [];
      let index = mainString.indexOf(subString);

      if (index === -1) {
        countOfError();
      }

      while (index !== -1) {
        indexes.push(index);
        index = mainString.indexOf(subString, index + 1);
      }

      return indexes;
    };

    let indexOfWord = position(hiddenWord, keywords[i].textContent);
    indexOfWord.map((element) => {
      if (tabs[element].textContent === keywords[i].textContent) {
        countOfError();
      } else {
        tabs[element].textContent = keywords[i].textContent;
        tabs[element].classList.remove("tab");
        tabs[element].classList.add("tabs__word");
        lengthOfTabs = lengthOfTabs - 1;
      }
    });
    if (lengthOfTabs === 0) {
      gameResult = "win";
      showModal(gameResult);
    }
  });
}

function paintHangman(count) {
  const hangamanHead = document.querySelector(".hangman-head");
  const hangamanBody = document.querySelector(".hangman-body");
  const hangmanArmLeft = document.querySelector(".hangman-arm-left");
  const hangmanArmRight = document.querySelector(".hangman-arm-right");
  const hangmanLegLeft = document.querySelector(".hangman-leg-left ");
  const hangmanLegRight = document.querySelector(".hangman-leg-right");
  switch (count) {
    case 1:
      hangamanHead.classList.remove("hidden");
      break;
    case 2:
      hangamanBody.classList.remove("hidden");
      break;
    case 3:
      hangmanArmLeft.classList.remove("hidden");
      break;
    case 4:
      hangmanArmRight.classList.remove("hidden");
      break;
    case 5:
      hangmanLegLeft.classList.remove("hidden");
      break;
    case 6:
      hangmanLegRight.classList.remove("hidden");
      gameResult = "lose";
      showModal(gameResult);
      break;
  }
}

function showModal(situation) {
  if (situation === "lose") {
    modal.classList.remove("hidden");
    modalHeader.textContent = "You lose!";
  } else if (situation === "win") {
    modal.classList.remove("hidden");
    modalHeader.textContent = "You win!";
  }
}

const modalButton = document.querySelector(".modal__button-again");
modalButton.addEventListener("click", startGame);
