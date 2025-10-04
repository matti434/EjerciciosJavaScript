/*
 Agenda de contactos : Usar un arrays de objetos {nombre , telefono } con funciones para agregar, buscar y eliminar contactos.
*/

const arrayContactos = [];
function menuPrincipal() {
  let salir = false;

  do {
    let opcion = prompt(
      `AGENDA DE CONTACTOS\n 1. Agregar contacto 2. Buscar contacto 3. Eliminar contacto 4. Salir -Seleccione una opción:`
    );

    switch (opcion) {
      case "1":
        agregarContacto();
        break;
      case "2":
        buscarContacto();
        break;
      case "3":
        eliminarContacto();
        break;
      case "4":
        salir = true;
        break;
      default:
        alert("Opción no válida");
    }
  } while (!salir);

  alert("¡Gracias por usar la agenda!");
}

function agregarContacto() {
  let nombre = prompt("Ingrese el nombre que decea agendar:");
  let inputTelefono = prompt("Ingrese el numero de telefono:");

  if (nombre.trim() === "" || inputTelefono.trim() === "") {
    alert("No ingrese espacios vacios");
    return;
  }
  if (nombre === null || inputTelefono === null) {
    alert("Saliendo del programa");
    return null;
  }
  // verifica que el telefono sea numerico
  if (isNaN(inputTelefono)) {
    alert("Ingrese un valor válido para el teléfono");
    return;
  }
  if (!/^\d+$/.test(inputTelefono)) {
    alert("El telefono solo debe tener números");
    return;
  }
  if (inputTelefono.length != 10) {
    alert("Los numeros de telefono son de 10 digitos");
    return;
  }

  let telefono = inputTelefono;

  const nombreExiste = arrayContactos.find(
    (contacto) => contacto.nombre.toLowerCase() === nombre.toLowerCase()
  );
  const telefonoExiste = arrayContactos.find(
    (contacto) => contacto.telefono === telefono
  );

  if (nombreExiste && telefonoExiste) {
    alert(`Contacto ya existe`);
    return;
  } else if (nombreExiste) {
    alert(`Ya existe un contacto con ese nombre pero distinto telefono`);
    return;
  } else if (telefonoExiste) {
    alert(`Ya existe un contacto con ese telefono pero distinto nombre`);
    return;
  }

  const nuevoContacto = {
    nombre: nombre,
    telefono: telefono,
  };

  arrayContactos.push(nuevoContacto);
  alert("Contacto agregado correctamente");
}

function buscarContacto() {
  let nombre = prompt("Ingrese el nombre a buscar");
  let inputTelefono = prompt("Ingrese el telefono a buscar");

  if (nombre.trim() === "" || inputTelefono.trim() === "") {
    alert("No ingrese espacios vacios");
    return;
  }
  if (nombre === null || inputTelefono === null) {
    alert("Saliendo del programa");
    return;
  }
  if (isNaN(inputTelefono)) {
    alert("Ingrese un valor valido");
    return;
  }
  if (!/^\d+$/.test(inputTelefono)) {
    alert("Ingrese solo numeros");
    return;
  }
  if (inputTelefono.length != 10) {
    alert("Los numeros de telefono son de 10 digitos");
    return;
  }

  let telefono = inputTelefono;

  // arrayContactos.find() busca en el array Global
  const nombreEncontrado = arrayContactos.find(
    (contacto) => contacto.nombre.toLowerCase() === nombre.toLowerCase()
  );

  const telefonoEncontrar = arrayContactos.find(
    (contacto) => contacto.telefono === telefono
  );

  if (nombreEncontrado && telefonoEncontrar) {
    alert(
      `Contacto encontrado ${contactoEncontrado.nombre} - ${contactoEncontrado.telefono}`
    );
  } else if (nombreEncontrado) {
    alert(`Ya existe un contacto con ese nombre pero distinto telefono`);
    return;
  } else if (telefonoEncontrar) {
    alert(`Ya existe un contacto con ese telefono pero distinto nombre`);
    return;
  }
  else {
    alert("Contacto no encontrado");
  }
}

function eliminarContacto() {
  let nombre = prompt("Ingrese el nombre a buscar");
  let inputTelefono = prompt("Ingrese el telefono a buscar");

  if (nombre.trim() === "" || inputTelefono.trim() === "") {
    alert("No ingrese espacios vacios");
    return;
  }
  if (nombre === null || inputTelefono === null) {
    alert("Saliendo del programa");
    return;
  }
  if (isNaN(inputTelefono)) {
    alert("Ingrese un valor valido");
    return;
  }
  if (!/^\d+$/.test(inputTelefono)) {
    alert("Ingrese solo numeros");
    return;
  }
  if (inputTelefono.length != 10) {
    alert("Los numeros de telefono son de 10 digitos");
    return;
  }

  let telefono = inputTelefono;

  // findIndex() devuelve la posicion(indice)
  const indice = arrayContactos.findIndex(
    (contacto) =>
      contacto.nombre.toLowerCase() === nombre.toLowerCase() &&
      contacto.telefono === inputTelefono
  );
  /* 
       String let inputTelefono = "0123456789"; - Teléfono con 0 al inicio
       let telefono = Number(inputTelefono); - 123456789 ¡Pierde el 0!
    */

  if (indice !== -1) {
    const contacto = arrayContactos[indice];
    const confirmar = confirm(`¿Está seguro de eliminar a ${contacto.nombre} - ${contacto.telefono}?`);

    if (confirmar) {
      arrayContactos.splice(indice, 1);
      alert("✅ Contacto eliminado correctamente");
    }
  } else {
    alert("Contacto no encontrado");
  }
}

menuPrincipal();
