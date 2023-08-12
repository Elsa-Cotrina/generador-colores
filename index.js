
let colorActualDisplay = document.getElementById("colorActualDisplay"); // Elemento para mostrar el color actual

let colorActual = "";

function randomColor() {
  let body = document.getElementById("bodyId");
  let colores = ["red", "green", "blue", "orange", "purple", "yellow"]; // Lista de colores disponibles
  let colorAleatorio = colores[Math.floor(Math.random() * colores.length)];

  while (colorAleatorio === colorActual) {
    colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
  }
  body.style.backgroundColor = colorAleatorio;
  colorActual = colorAleatorio;
  colorActualDisplay.innerHTML = colorActual;
}
