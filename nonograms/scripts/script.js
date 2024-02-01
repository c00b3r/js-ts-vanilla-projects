const body = document.querySelector("body");
const nonograms = {
  Бумеранг: [
    [1, 0, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [1, 1, 1, 0, 0],
    [1, 1, 1, 1, 0],
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
let canvas;

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
    drawCell(paintCanvas, element.textContent);
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

  const transposedArray = Array.from(
    { length: arrayOfHint.length },
    (_, colIndex) => arrayOfHint.map((row) => row[colIndex])
  );

  const countsPerColumns = transposedArray.map((column) => {
    let count = 0;
    const counts = [];

    for (let i = 0; i < column.length; i++) {
      if (column[i] === 1) {
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

  for (let i = 0; i < 5; i++) {
    const hui = countsPerColumns[i].join("\n");
    const lines = hui.split("\n");

    lines.forEach((line, index) => {
      canvasCtx.fillText(line, i * 50 + 120, 50 + index * 20);
      canvasCtx.strokeRect(i * 50 + 100, 30, 50, 70);
    });
  }

  for (let i = 0; i < 5; i++) {
    const hui = countsPerRow[i].join("  ");

    canvasCtx.fillText(hui, 40, i * 50 + 130);
    canvasCtx.strokeRect(30, i * 50 + 100, 70, 50);
  }
}

function drawCell(canvas, nameOfCell) {
  const ctxWhenCell = canvas.getContext("2d");
  const cellState = {};
  let arrayCells = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ];

  canvas.addEventListener("click", function (event) {
    const x = event.clientX - canvas.getBoundingClientRect().left;
    const y = event.clientY - canvas.getBoundingClientRect().top;

    const rowIndex = Math.floor((y - 100) / 50);
    const colIndex = Math.floor((x - 100) / 50);

    if (rowIndex >= 0 && rowIndex < 5 && colIndex >= 0 && colIndex < 5) {
      if (!cellState[`${rowIndex}-${colIndex}`]) {
        cellState[`${rowIndex}-${colIndex}`] = "#dce1e6";
      }

      const currentColor = cellState[`${rowIndex}-${colIndex}`];
      ctxWhenCell.fillStyle = currentColor === "#dce1e6" ? "black" : "#dce1e6";
      ctxWhenCell.fillRect(colIndex * 50 + 102, rowIndex * 50 + 102, 46, 46);

      cellState[`${rowIndex}-${colIndex}`] =
        currentColor === "#dce1e6" ? "black" : "#dce1e6";

      arrayCells[rowIndex][colIndex] = currentColor === "black" ? 0 : 1;

      if (areArraysEqual(arrayCells, nonograms[nameOfCell])) {
        messageOfWin(nameOfCell);
      }
    }
  });

  canvas.addEventListener("contextmenu", (event) => {
    event.preventDefault();
    const x = event.clientX - canvas.getBoundingClientRect().left;
    const y = event.clientY - canvas.getBoundingClientRect().top;

    const rowIndex = Math.floor((y - 100) / 50);
    const colIndex = Math.floor((x - 100) / 50);

    if (rowIndex >= 0 && rowIndex < 5 && colIndex >= 0 && colIndex < 5) {
      const currentColor = cellState[`${rowIndex}-${colIndex}`];

      if (currentColor === "black") {
        return;
      }
      ctxWhenCell.strokeStyle = "red";
      ctxWhenCell.lineWidth = 3;

      ctxWhenCell.beginPath();
      ctxWhenCell.moveTo(colIndex * 50 + 106, rowIndex * 50 + 106);
      ctxWhenCell.lineTo(colIndex * 50 + 142, rowIndex * 50 + 142);
      ctxWhenCell.moveTo(colIndex * 50 + 142, rowIndex * 50 + 106);
      ctxWhenCell.lineTo(colIndex * 50 + 106, rowIndex * 50 + 142);
      ctxWhenCell.stroke();
    }
  });
}

function areArraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1[i].length; j++) {
      if (arr1[i][j] !== arr2[i][j]) {
        return false;
      }
    }
  }

  return true;
}

function messageOfWin(nameOfNonogram) {
  const containElements = document.querySelector(".winner");
  if (containElements !== null) {
    return;
  } else {
    const winMessage = document.createElement("div");
    winMessage.classList.add("winner");
    winMessage.textContent = `Поздравляю вы отгадали нонограмму "${nameOfNonogram}"`;
    container.insertAdjacentElement("afterbegin", winMessage);
  }
}
