/*Sobrescribe un metodo de una clase que utilice herencias*/

class Padre {
  constructor(nombre, dni) {
    this.nombre = nombre;
    this.dni = dni;
  }

  mostrarDato() {
    console.log(`El nombre: ${this.nombre} el dni: ${this.dni}`);
  }
}
class Hija extends Padre {
  constructor(nombre, dni, legajo) {
    super(nombre, dni);
    this.legajo = legajo;
  }

  MostrarDatosHija() {
    this.mostrarDato;
    console.log(`El legajo es: ${this.legajo}`);
  }
}
let hija1 = new Hija("Ana", 12345678, 98765);
hija1.MostrarDatosHija();
