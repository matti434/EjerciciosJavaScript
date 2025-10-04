/*
Crea una clase que reciba dos propiedades
Crea una clase que haga uso de herencia
Crea una clase que haga uso de get and set
Modifica la clase con get y set para que use propiedades privadas
Utiliza los get y set y muestra sus valores
Sobrescribe un metodo de una clase que utilice herencias
*/

class Padre{
    
    constructor(nombre,dni){
      this.nombre=nombre
      this.dni=dni
    }

    
    mostrarDato(){
        console.log(`El nombre: ${this.nombre} el dni: ${this.dni}`);
    }
}
const persona = new Padre("Juan", "12345678");
persona.mostrarDato();

class Hija extends Padre{

    constructor(nombre,dni,legajo){
        super(nombre,dni);
        this.legajo=legajo;
    }

    mostrarDato(){
        console.log(`El nombre: ${this.nombre} el dni: ${this.dni} el legajo es: ${this.legajo}`);
    }
}