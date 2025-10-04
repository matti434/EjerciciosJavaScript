const horaHT = document.getElementById("clock");
const textoTarea = document.getElementById("textTask");
const contenedorTarea = document.getElementById("taskList");
const addList = document.getElementById("addList");


function formatorHora() {
    const fechaActual = new Date();
    const hora = fechaActual.getHours();
    const minutos = fechaActual.getMinutes();
    const segundos = fechaActual.getSeconds();

    horaHT.textContent = `${hora < 10 ? "0" + hora : hora}:${minutos < 10 ? "0" + minutos : minutos}:${segundos < 10 ? "0" + segundos : segundos}`;
}

// Iniciar el reloj y actualizar cada segundo
formatorHora();
setInterval(formatorHora, 1000);


function agregarTarea(valor) {
    if (valor === undefined || valor === null || valor === "") {
        alert("La tarea no puede estar vacía");
        return;
    }

    const textoTareaStr = String(valor).trim();

    if (!isNaN(textoTareaStr)) {
        alert("La tarea no puede ser solo números");
        return;
    }

    if (textoTareaStr.length < 10) {
        alert("La tarea debe tener al menos 10 caracteres");
        return;
    }

    return textoTareaStr;
}


addList.addEventListener("click", () => {
    const valor = textoTarea.value;
    const tareaValida = agregarTarea(valor);

    if (!tareaValida) return;


    if (contenedorTarea.querySelector('.empty-state')) {
        contenedorTarea.innerHTML = '';
    }

    const col = document.createElement("div");
    col.className = "col-12 col-md-10";


    const card = document.createElement("div");
    card.className = "card task-card shadow-sm h-100";


    const cardBody = document.createElement("div");
    cardBody.className = "card-body d-flex justify-content-between align-items-center";


    const p = document.createElement("p");
    p.className = "task-text mb-0 me-3 flex-grow-1";
    p.textContent = tareaValida;


    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.className = "btn btn-danger btn-delete btn-sm";

    btnEliminar.addEventListener('click', () => {
        col.remove();
    });

    cardBody.appendChild(p);
    cardBody.appendChild(btnEliminar);
    card.appendChild(cardBody);
    col.appendChild(card);
    contenedorTarea.appendChild(col);

    // Limpiar textarea y mantener el foco
    textoTarea.value = "";
    textoTarea.focus();
});

// Agregar funcionalidad para enviar con Enter
textoTarea.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        addList.click();
    }
});