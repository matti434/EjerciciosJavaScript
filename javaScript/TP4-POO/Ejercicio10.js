/**}
10- crear una clase aeropuerto con las propiedades nombreAeropuerto y lista de aviones, esta clase deberá contener el método agregarAvion,
 el cual recibirá un objeto de tipo Avión, además de un método buscarAvion el cual recibirá el nombre de un avión y devolverá información en caso de encontrarlo, 
 si no lo encontró indicar con un mensaje.
Por su parte los aviones tendrán las propiedades: nombre, capacidad, destino, lista de pasajeros. 
Los aviones tienen el método abordar el cual permite que un pasajero suba al avión solo si hay capacidad disponible en el mismo, 
caso contrario mostrar un mensaje que indique que el avión está lleno.
Crear un objeto de tipo aeropuerto llamado "Aeropuerto Internacional", crear 3 objetos aviones con diferentes destinos. 
Agregar los 3 aviones al aeropuerto, buscar un avión y usar el método abordar.

// cuantos hay, cual es la capacidad maxima,tiempo de ingreso
 */

class Areopuerto {
  constructor(nombreAreopuerto, listaAviones = []) {
    this.nombreAreopuerto = nombreAreopuerto;
    this.listaAviones = listaAviones;
  }

  agregarAvion(avion) {
    if (this.listaAviones.some((a) => a.equals(avion))) {
      console.log("hay dos repetidos");
      return false;
    }

    this.listaAviones.push(avion);
    return true;
  }
}

class Avion {
  constructor(nombre, capacidad, destino, listaPasajeros = []) {
    this.nombre = nombre;
    this.capacidad = capacidad;
    this.destino = destino;
    this.listaPasajeros = listaPasajeros;
  }

  abordar(pasajero) {
    if (this.listaPasajeros.length >= this.capacidad) {
      console.log("muchos pasajeros");
      return false;
    }
    this.listaPasajeros.push(pasajero);
    return true;
  }

  equals(otroAvion) {
    return this.nombre.toLowerCase() === otroAvion.toLowerCase();
  }
}

class Pasajero {
  constructor(nombre, dni) {
    this.nombre = nombre;
    this.dni = dni;
  }
}

// Aqui empieza lo bueno
const aeropuerto = new Areopuerto("Aeropuerto Internacional", []);
let confirmar = true;
let confirmar2 = true;
do {
  const nombre2 = prompt("Ingrese el nombre del pasajero");
  const capacidad = prompt("Ingrese el nombre del pasajero");
  const destino = prompt("Ingrese el nombre del pasajero");

  const avion = new Avion(nombre2, capacidad, destino, []);

  if (!aeropuerto.agregarAvion(avion)) {
    console.log("El avion ya existe");
    continue;
  }
  do {
    const nombre3 = prompt("Ingrese el nombre del pasajero");
    const dni = prompt("Ingrese el dni del pasajero");

    const pasajero = new Pasajero(nombre3, dni);

    if (!avion.abordar(pasajero)) {
      console.log("El avion esta lleno");
      break;
    }
     confirmar = confirm("desea salir?");
  } while (!confirmar);
   confirmar2 = confirm("desea salir?");
} while (!confirmar2);
