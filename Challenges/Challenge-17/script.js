const horaHT = document.getElementById("clock");
const textoTarea = document.getElementById("textTask");
const contenedorTarea = document.getElementById("taskList");
const addList = document.getElementById("addList");

function formatorHora() {
  const fechaActual = new Date(); //muestra la fecha y hora actual
  const hora = fechaActual.getHours();
  const minutos = fechaActual.getMinutes();
  const segundos = fechaActual.getSeconds();

  horaHT.textContent = ` ${hora < 10 ? "0" + hora : hora}:${
    minutos < 10 ? "0" + minutos : minutos
  }:${segundos < 10 ? "0" + segundos : segundos}`;
}

setInterval(formatorHora, 1000);

function agregarTarea(valor) {
  if (valor === undefined || valor === null) {
    alert("Los valores no pueden ser vacios ni nulos");
    return;
  }

  const textoTareaStr = String(valor).trim();

  if (!isNaN(textoTareaStr)) {
    alert("No pueden ser numeros");
    return;
  }
  if (textoTareaStr.length < 10) {
    alert("La tarea debe ser mayor a 10 caracteres");
    return;
  }

  return textoTareaStr;
}

addList.addEventListener("click", () => {
  // 1. leer el valor del textarea
  const valor = textoTarea.value;

  // 2. validarlo
  const tareaValida = agregarTarea(valor);

  // si no pasó validación → agregarTarea ya hizo alert y devolvió undefined
  if (!tareaValida) return;

  const col = document.createElement("div");
  col.className = "col-12 col-md-6 col-lg-4 mb-3 ms-auto me-auto";

  //creo el contenedor para la tarea
  const card = document.createElement("div");
  card.className = "card shadow-sm h-100 fs-6 fs-md-5";

  //creo el contenido
  const cardBody = document.createElement("div");
  cardBody.className = "card-body text-center";

  //muestro la tarea
  const p = document.createElement("p");
  p.className = "card-text";
  p.textContent = tareaValida;

  // ensamblar
  cardBody.appendChild(p);
  card.appendChild(cardBody);
  col.appendChild(card);

  contenedorTarea.appendChild(col);

  // limpiar textarea después de agregar
  textoTarea.value = "";
});

