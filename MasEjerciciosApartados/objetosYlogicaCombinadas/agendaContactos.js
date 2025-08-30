/*
 Agenda de contactos : Usar un arrays de objetos {nombre , telefono } con funciones para agregar, buscar y eliminar contactos.
*/

const arrayContactos = [];
function agendaContactos() {
  let nombre = prompt("Ingrese el nombre:");
  let telefono = prompt("Ingrese el numero telefonico:");

  // creo el objeto contacto
  const contacto = {
    nombre: nombre,
    telefono: telefono,
  };

  // agrega al array
  arrayContactos.push(contacto);
  alert("Contacto agregado correctamente");
}

function agendar() {
  let nombre = prompt("Ingrese el nombre que decea agendar:");
  let inputTelefono = prompt("Ingrese el numero de telefono:");

  if (isNaN(inputTelefono)) {
    alert("Ingrese un valor valido");
    return;
  }
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
  if(!/^\d+$/.test(inputTelefono)){
    alert("El telefono solo debe tener números");
    return;
  }
  if (inputTelefono.length != 10) {
    alert("Los numeros de telefono son de 10 digitos");
    return;
  }
  // number no acepta caracteres no numericos
  let telefono = Number(inputTelefono);

  const nombreAgendar = arrayContactos.find(
    (contacto) => contacto.nombre.toLowerCase() === nombre.toLowerCase()
  );
  const telefonoAgendar = arrayContactos.find(
    (contacto) => contacto.telefono === telefono
  );

  if (nombreAgendar && telefonoAgendar) {
    alert(`Contacto ya existe`);
    return;
  } else if (nombreAgendar) {
    alert(`Ya existe un contacto con ese nombre pero distinto telefono`);
    return;
  } else if (telefonoAgendar) {
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

function BuscarContacto() {
  let inputNombre = prompt("Ingrese el nombre a buscar");
  let inputTelefono = prompt("Ingrese el telefono a buscar");

  // arrayContactos.find() busca en el array Global
  const contactoEncontrado = arrayContactos.find(
    (contacto) =>
      contacto.nombre.toLowerCase() === inputNombre.toLowerCase() &&
      contacto.telefono === inputTelefono
  );

  if (contactoEncontrado) {
    return `Contacto encontrado ${contactoEncontrado.nombre} - ${contactoEncontrado.telefono}`;
  } else {
    alert("Contacto no encontrado");
  }
}

function eliminarContacto() {
  let nombre = prompt("Ingrese el nombre que decea eliminar:");

  const contactoEliminar = arrayContactos.find(
    (contacto) => contacto.nombre.toLowerCase() === nombre.toLowerCase()
  );

  if (contactoEliminar) {
    // findIndex() devuelve la posicion(indice)
    const indice = arrayContactos.findIndex(
      (contacto) => contacto.nombre.toLowerCase() === nombre.toLowerCase()
    );

    // splice para eliminar
    arrayContactos.splice(indice, 1);
    alert("Contacto borrado");
  } else {
    alert("Contacto no encontrado");
  }
}
