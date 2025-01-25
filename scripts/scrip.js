let saludo = document.querySelector("h1");
let botonAccion = document.querySelector("button");

botonAccion.addEventListener("click", () => {
  saludoMemoria();
});

function saludoMemoria() {
  const nombre = prompt("Hola, introduce tu nombre");
  if (!nombre) {
    saludoMemoria();
  } else {
    localStorage.setItem("nombre", nombre);
    saludo.textContent = `Mozilla is cool, ${nombre}`;
  }
}

if (!localStorage.getItem("nombre")) {
  saludoMemoria();
} else {
  const nombreGuardado = localStorage.getItem("nombre");
  saludo.textContent = `Mozilla is cool, ${nombreGuardado}`;
}
