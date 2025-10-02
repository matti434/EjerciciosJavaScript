/*
7- Nos piden realizar una agenda telefónica de contactos.

Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual a otro cuando sus nombres son iguales.

Una agenda de contactos está formada por un conjunto de contactos. Se podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto (10).

Los métodos de la agenda serán los siguientes:

aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar más contactos indicar por pantalla.
existeContacto(Contacto): indica si el contacto pasado existe o no.
listarContactos(): Lista toda la agenda
buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
agendaLlena(): indica si la agenda está llena.
huecosLibres(): indica cuántos contactos más podemos ingresar.

Crea un menú con opciones que serán seleccionadas por el usuario usando un prompt, las salidas de las operaciones seleccionadas por el usuario se pueden mostrar en pantalla y  por consola.

*/

class Contacto {
  constructor(nombre, telefono) {
    this._nombre = nombre;
    this._telefono = telefono;
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(nuevoNombre) {
    if (nuevoNombre === undefined || nuevoNombre === null) {
      console.log("Los valores ingresados no pueden ser nulos ni indefinidos");
      return;
    }

    const nuevoNombreStr = String(nuevoNombre).trim();

    if (nuevoNombreStr === "") {
      console.log("No debe estar vacio");
      return;
    }

    if (nuevoNombreStr.length < 2 || nuevoNombreStr.length > 30) {
      console.log("No puede tener menos de 2 caracteres y maximo 30");
      return;
    }

    if (/^[0-9]+$/.test(nuevoNombreStr)) {
      console.log(
        "El nombre del autor no puede contener numeros ni caracteres especiales"
      );
      return;
    }

    this._nombre = nuevoNombreStr;
    console.log("Nuevo nombre" + this._nombre);
  }

  get telefono() {
    return this._telefono;
  }

  set telefono(nuevoTelefono) {
    if (nuevoTelefono === undefined || nuevoTelefono === "") {
      console.log("Los valores no pueden ser vacios");
      return;
    }

    const telefonoStr = String(nuevoTelefono).trim();

    if (telefonoStr === "") {
      console.log("No puede estar vacio");
      return;
    }

    if (!/^\d+$/.test(telefonoStr)) {
      console.log("Deben ser números");
      return;
    }

    if (telefonoStr.length != 10) {
      console.log("El telefono debe tener 10 digitos");
      return;
    }

    const telefonoInt = parseInt(telefonoStr);

    this._telefono = telefonoInt;
  }

  equals(otroContacto) {
    return this._nombre.toLowerCase() === otroContacto._nombre.toLowerCase();
  }
}
class Agenda {
  constructor(tamaño = 10) {
    this.contacto = [];
    this.tamaño = tamaño;
  }

  agregarContacto(contacto) {
    if (this.contacto.length >= this.tamaño) {
      console.log("La agenda esta llena");
      return;
    }
    if (!(contacto instanceof Contacto)) {
      throw new Error("Debe proporcionar un objeto Contacto válido");
    }

    if (this.contactoExiste(contacto)) {
      console.log("Ya existe un contacto con ese nombre");
      return false;
    }

    this.contacto.push(contacto);
    return true;
  }

  contactoExiste(contacto) {
    return this.contacto.some((c) => c.equals(contacto)); // retorna true
  }
  listaContactos(contacto) {
    for (let i = 0; i < this.contacto.length; i++) {
      console.log(
        `Nombre: ${this.contacto[i].nombre} y telefono: ${this.contacto[i].telefono}`
      );
    }
    return;
  }
}

const contacto = new Contacto();
const agenda = new Agenda();

function menu() {
  let continuar;
  do {
    let opciones = prompt(
      "Por favor eliga la opcion: 1-Añadir contacto 2-Existe Contacto 3-Lista de contactos 4-BuscarContacto 5-Eliminar Contacto 6-Agenda llena 7-Huecos Libres"
    );

    switch (opciones) {
      case "1":
        let nombre = prompt("Por favor ingrese el nombre:");
        let telefono = prompt("Ingrese el numero de telefono:");

        let nuevoContacto = new Contacto(nombre, telefono);
        let resultado = agenda.agregarContacto(nuevoContacto);
        if (resultado) {
          console.log("Contacto añadido con exito");
        }
        break;
      case "2":
        let contactoABuscar = prompt(
          "Ingrese el nombre del contacto a buscar:"
        );
        let contactoTemporal = new Contacto(contactoABuscar, "0000000000");
        let resultadoBusqueda = agenda.contactoExiste(contactoTemporal);
        if (resultadoBusqueda) {
          console.log("El contacto existe");
        }
        break;
      case "3":
        agenda.listaContactos();
        break;
    }

    continuar = confirm("¿Quiere continuar con otra operación?"); // Cambié el nombre de la variable
  } while (continuar);
}

menu();
// clase
// atributos #id - private int dni
// constructor
// setter and getter
// metodos
