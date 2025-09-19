//To-Do List (lista de tareas) → Agregar, marcar como hechas, eliminar tareas.

// recibir la entrada de las tareas
// hacer el contenedor de la tarea
// hacer la lista de las tareas
// ingresar el contenido de la tarea


const crearTarea = (e) => {
    e.preventDefault();
    console.log("desde crear tarea");
    
    const inputTarea = document.getElementById("taskInput").value.trim();
    console.log(inputTarea);
    
}

formTareas.addEventListener('submit', crearTarea);

