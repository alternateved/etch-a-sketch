const gridContainer = document.querySelector("main");

function generateGrid(size) {
  for (let i = 0; i < size; i++) {
    let row = document.createElement("div");
    row.classList.add("row");

    for (let j = 0; j < size; j++) {
      let square = document.createElement("div");
      square.classList.add("square");
      row.appendChild(square);
    }
    gridContainer.appendChild(row);
  }
}

generateGrid(100);
