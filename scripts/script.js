const gridContainer = document.querySelector(".container");
const clearButton = document.querySelector("#clear-button");
const sizeSlider = document.querySelector("#size-slider");
const sizeValue = document.querySelector("#size-value");
const toggleButtons = document.querySelectorAll(".toggle-buttons");

function randomNumber() {
  return Math.floor(Math.random() * Math.floor(100));
}

function generateRainbow() {
  let r, g, b;
  let h = randomNumber() / randomNumber();
  let i = ~~(h * 6);
  let f = h * 6 - i;
  let q = 1 - f;
  switch (i % 6) {
    case 0:
      r = 1;
      g = f;
      b = 0;
      break;
    case 1:
      r = q;
      g = 1;
      b = 0;
      break;
    case 2:
      r = 0;
      g = 1;
      b = f;
      break;
    case 3:
      r = 0;
      g = q;
      b = 1;
      break;
    case 4:
      r = f;
      g = 0;
      b = 1;
      break;
    case 5:
      r = 1;
      g = 0;
      b = q;
      break;
  }
  let color =
    "#" +
    ("00" + (~~(r * 255)).toString(16)).slice(-2) +
    ("00" + (~~(g * 255)).toString(16)).slice(-2) +
    ("00" + (~~(b * 255)).toString(16)).slice(-2);
  return color;
}

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

function colorGridRainbow() {
  let color = "";
  gridContainer.childNodes.forEach((square) => {
    square.addEventListener("mouseover", (event) => {
      color = generateRainbow();
      event.target.style.backgroundColor = color;
    });
  });
}

function colorGridWhite() {
  gridContainer.childNodes.forEach((square) => {
    square.addEventListener("mouseover", (event) => {
      event.target.style.backgroundColor = "white";
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

function toggleColors() {
  toggleButtons.forEach((button) =>
    button.addEventListener("click", (event) => {
      let current = document.getElementsByClassName("active");
      if (current.length > 0) {
        current[0].className = current[0].className.replace(" active", "");
      }

      switch (event.target.getAttribute("id")) {
        case "ink":
          colorGridBlack();
          break;
        case "rainbow":
          colorGridRainbow();
          break;
        case "eraser":
          colorGridWhite();
          break;
      }
      event.target.className += " active";
    })
  );
}

function mainGrid() {
  sizeSlider.value = 16;
  generateGrid(sizeSlider.value);
  changeSize();
  colorGridBlack();
  toggleColors();
  clearButton.addEventListener("click", () => clearGrid(sizeSlider.value));
}

mainGrid();
