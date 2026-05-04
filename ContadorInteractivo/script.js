let contador = 0;

const display = document.getElementById("contador");
const btnIncrement = document.getElementById("increment");
const btnDecrement = document.getElementById("decrement");
const btnReset = document.getElementById("reset");

// render
function render() {
  display.innerHTML = `<h1>${contador}</h1>`;
}

// eventos
btnIncrement.addEventListener("click", () => {
  contador++;
  render();
});

btnDecrement.addEventListener("click", () => {
  contador--;
  render();
});

btnReset.addEventListener("click", () => {
  contador = 0;
  render();
});

// inicializar
render();