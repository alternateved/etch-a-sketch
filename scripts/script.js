const gridContainer = document.querySelector(".container");

function generateGrid(size) {
  for (let i = 0; i < size * size; i++) {
    let square = document.createElement("div");
    square.classList.add("square");
    gridContainer.appendChild(square);
  }
}

function colorGrid() {
  gridContainer.childNodes.forEach((square) =>
    square.addEventListener("mouseover", (event) => {
      event.target.classList.add("ink");
    })
  );
}

function clearGrid() {
  gridContainer.childNodes.forEach((square) => square.classList.add("clear"));
}

generateGrid(24);
colorGrid();
