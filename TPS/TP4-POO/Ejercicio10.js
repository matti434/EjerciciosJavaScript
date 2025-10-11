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

/*crear una clase aeropuerto con las propiedades nombreAeropuerto y lista de aviones, esta clase deberá contener el método agregarAvion
 el cual recibirá un objeto de tipo Avión, además de un método buscarAvion el cual recibirá el nombre de un avión y devolverá información en caso de encontrarlo, 
 si no lo encontró indicar con un mensaje.*/
class Aeropuerto {
  constructor(nombreAeropuerto, listaDeAviones) {
    this.nombreAeropuerto = nombreAeropuerto;
    this.listaDeAviones = [];
  }

  agregarAvion(avion) {
    this.listaDeAviones.push(avion);
  }

  buscarAvion(nombreAvion) {
    const avionEncontrado = this.listaDeAviones.find(
      (avion) => avion.nombre === nombreAvion
    );

    if (avionEncontrado) {
      console.log(
        `Avión encontrado: ${avionEncontrado.nombre}, Destino: ${avionEncontrado.destino}, Capacidad: ${avionEncontrado.capacidad}`
      );
      return avionEncontrado;
    } else {
      console.log(`No se encontró el avión: ${nombreAvion}`);
      return null;
    }
  }
}

/*Por su parte los aviones tendrán las propiedades: nombre, capacidad, destino, lista de pasajeros. 
Los aviones tienen el método abordar el cual permite que un pasajero suba al avión solo si hay capacidad disponible en el mismo, 
caso contrario mostrar un mensaje que indique que el avión está lleno.*/

class Avion {
  constructor(nombre, capacidad, destino) {
    this.nombre = nombre;
    this.capacidad = capacidad;
    this.destino = destino;
    this.listaDePasajeros = [];
  }

  abordar(pasajero) {
    if (!pasajero.pasaporte) {
      return ` El pasajero ${pasajero.nombre} no puede abordar: "Pasaporte invalido" `;
    }

    if (this.listaDePasajeros.length < this.capacidad) {
      this.listaDePasajeros.push(pasajero);
      return "Pasajero aborde exitosamente";
    } else {
      return "El avion ya esta lleno";
    }
  }
}

class Pasajero {
  constructor(nombre, pasaporte) {
    this.nombre = nombre;
    this.pasaporte = pasaporte;
  }
}

/*Crear un objeto de tipo aeropuerto llamado "Aeropuerto Internacional", crear 3 objetos aviones con diferentes destinos. 
Agregar los 3 aviones al aeropuerto, buscar un avión y usar el método abordar.*/

// 1. Crear aeropuerto
const aeropuertoInternacional = new Aeropuerto("Aeropuerto Internacional");

// 2. Crear 3 aviones
const avion1 = new Avion("MessiAirenls", 2, "Nueva Zelanda");
const avion2 = new Avion("Airbus 747", 3, "España");
const avion3 = new Avion("Boeing 777", 4, "Japón");

// 3. Agregar aviones al aeropuerto
aeropuertoInternacional.agregarAvion(avion1);
aeropuertoInternacional.agregarAvion(avion2);
aeropuertoInternacional.agregarAvion(avion3);

// 4. Crear pasajeros
const pasajero1 = new Pasajero("Matias", true);
const pasajero2 = new Pasajero("Ana", true);
const pasajero3 = new Pasajero("Carlos", false); // Pasaporte inválido

// 5. Usar método abordar
console.log(avion1.abordar(pasajero1)); // "Matias abordó exitosamente"
console.log(avion1.abordar(pasajero2)); // "Ana abordó exitosamente"
console.log(avion1.abordar(pasajero3)); // "No puede abordar: pasaporte inválido"

// 6. Buscar avión (necesitas implementar este método)
aeropuertoInternacional.buscarAvion("MessiAirenls");
