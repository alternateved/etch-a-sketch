const gridContainer = document.querySelector(".container");
const clearButton = document.querySelector("#clear");
const sizeSlider = document.querySelector("#size-slider");
const sizeValue = document.querySelector("#size-value");

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

function colorGridBlack() {
  gridContainer.childNodes.forEach((square) => {
    square.addEventListener("mouseover", (event) => {
      event.target.style.backgroundColor = "black";
    });
  });
}

function clearGrid(size) {
  while (gridContainer.childElementCount > 0) {
    gridContainer.removeChild(gridContainer.firstElementChild);
  }
  generateGrid(size);
  colorGridBlack();
}

function changeSize() {
  sizeValue.textContent = sizeSlider.value;

  sizeSlider.addEventListener("input", (event) => {
    sizeValue.textContent = event.target.value;
  });
  sizeSlider.addEventListener("change", (event) => {
    clearGrid(event.target.value);
  });
}

function mainGrid() {
  sizeSlider.value = 16;
  generateGrid(sizeSlider.value);
  changeSize();
  clearButton.addEventListener("click", () => clearGrid(sizeSlider.value));
  colorGridBlack();
}

mainGrid();
