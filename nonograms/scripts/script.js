const body = document.querySelector("body");
const nonograms = {
  Бумеранг: [
    [1, 0, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [1, 1, 1, 0, 0],
    [0, 1, 1, 1, 1],
  ],
  Верблюд: [
    [0, 0, 0, 1, 1],
    [1, 1, 0, 1, 0],
    [1, 1, 1, 1, 0],
    [1, 0, 1, 0, 0],
    [1, 0, 1, 0, 0],
  ],
  Кошка: [
    [0, 0, 1, 0, 1],
    [0, 0, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 0],
    [1, 1, 1, 1, 1],
  ],
  Трубка: [
    [1, 1, 0, 1, 1],
    [1, 1, 1, 1, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 1, 1],
    [0, 0, 0, 0, 1],
  ],
  Тетрис: [
    [0, 1, 1, 1, 1],
    [0, 0, 1, 0, 0],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 1, 1, 1],
  ],
};

body.insertAdjacentHTML(
  "beforeend",
  `<div class="container">
<h1 class="header">Выберите нонограму для решения</h1>
<div class="container__button">Бумеранг</div>
<div class="container__button">Верблюд</div>
<div class="container__button">Кошка</div>
<div class="container__button">Трубка</div>
<div class="container__button">Тетрис</div>
</div>`
);

const container = document.querySelector(".container");
const buttons = document.querySelectorAll(".container__button");

buttons.forEach((element) => {
  element.addEventListener("click", function handleClick() {
    container.innerHTML = "";
    const paintCanvas = document.createElement("canvas");
    paintCanvas.setAttribute("id", "nonogramCanvas");
    paintCanvas.setAttribute("width", "500px");
    paintCanvas.setAttribute("height", "500px");
    container.appendChild(paintCanvas);
    drawNonogram(element.textContent, paintCanvas);
  });
});

function drawNonogram(nameOfNonogram, canvas) {
  const ctx = canvas.getContext("2d");
  const rows = 5;
  const column = 5;
  const cell = nonograms[nameOfNonogram];
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < column; j++) {
      const x = j * 50 + 100;
      const y = i * 50 + 100;
      // ctx.fillStyle = cell[i][j] === 1 ? "#000" : "#fff";
      // ctx.fillRect(x, y, 50, 50);
      ctx.strokeRect(x, y, 50, 50);
    }
  }
  drawHint(cell, ctx);
}

function drawHint(arrayOfHint, canvasCtx) {
  canvasCtx.font = "20px Arial";

  const countsPerRow = arrayOfHint.map((row) => {
    let count = 0;
    const counts = [];

    for (let i = 0; i < row.length; i++) {
      if (row[i] === 1) {
        count++;
      } else if (count > 0) {
        counts.push(count);
        count = 0;
      }
    }

    if (count > 0) {
      counts.push(count);
    }

    return counts;
  });

  console.log(countsPerRow);
}
const canvas = document.querySelector("canvas");
