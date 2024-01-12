const body = document.querySelector("body");
body.insertAdjacentHTML(
  "beforeend",
  `        <div class="container">
  <div class="hangman">
    <div class="hangman__game-proccess">
      <img src="src/gallows.svg" alt="gallows" />
      <img
        src="src/hangman-head.svg"
        alt="hangaman head"
        class="hangman-head"
      />
      <img
        src="src/hangman-body.svg"
        alt="hangman body"
        class="hangman-body"
      />
      <img
        src="src/hangman-arm-left.png"
        alt="hangaman left arm"
        class="hangman-arm-left"
      />
      <img
        src="./src/hangman-arm-right.png"
        alt="hangman arm right"
        class="hangman-arm-right"
      />
      <img
        src="./src/hangman-leg-left.png"
        alt="hangman left leg"
        class="hangman-leg-left"
      />
      <img
        src="./src/hangman-leg-right.png"
        alt="hangman leg right"
        class="hangman-leg-right"
      />
    </div>
    <div class="hangman__header"></div>
  </div>
  <div class="hangman-guess">
    <div class="hangman-guess__tabs">
      <div class="tab"></div>
      <div class="tab"></div>
      <div class="tab"></div>
      <div class="tab"></div>
      <div class="tab"></div>
    </div>
    <div class="hangman-guess__hint text">
      Hint: A popular Italian dish with dough, sauce, and toppings.
    </div>
    <div class="hangman-guess__counter text">
      Try: <span style="color: red">1 / 6</span>
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

<div class="modal-wrapper">
  <div class="modal">
    <h1 class="modal-header text">Your win!</h1>
    <div class="modal__button-again">Play Again</div>
  </div>
</div>`
);
