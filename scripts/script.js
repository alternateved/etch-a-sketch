const gridContainer = document.querySelector(".container");
const clearButton = document.querySelector("#clear");
const sizeButton = document.querySelector("#size");

let size = 16;

function generateGrid(size) {
  gridContainer.style[
    `grid-template-columns`
  ] = `repeat(${size}, minmax(0,1fr))`;
  gridContainer.style[`grid-template-rows`] = `repeat(${size}, minmax(0,1fr))`;

  for (let i = 0; i < size * size; i++) {
    let square = document.createElement("div");
    square.classList.add("square");
    gridContainer.appendChild(square);
  }
}

function colorGrid() {
  gridContainer.childNodes.forEach((square) => {
    square.addEventListener("mouseover", (event) => {
      event.target.classList.add("ink");
    });
  });
}

function clearGrid(size) {
  for (let i = 0; i < size * size; i++) {
    if (gridContainer.lastElementChild === null) {
      break;
    } else {
      gridContainer.removeChild(gridContainer.lastElementChild);
    }
  }
  generateGrid(size);
  colorGrid();
}

function mainGrid() {
  sizeButton.addEventListener("click", () => {
    let answer = Number(prompt("HOW BIG...?!!!"));
    clearGrid(answer);
  });

  clearButton.addEventListener("click", () => clearGrid(size));
  generateGrid(size);
  colorGrid();
}

mainGrid();
