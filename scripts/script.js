const gridContainer = document.querySelector(".container");
const clearButton = document.querySelector("#clear");

let size = 24;

function generateGrid(size) {
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
    gridContainer.removeChild(gridContainer.lastElementChild);
  }
  generateGrid(size);
  colorGrid();
}

clearButton.addEventListener("click", () => clearGrid(size));

generateGrid(24);
colorGrid();
