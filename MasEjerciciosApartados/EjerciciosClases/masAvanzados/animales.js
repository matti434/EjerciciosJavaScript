/*
Herencia: Animales

Clase Animal con nombre y método hacerSonido().

Clase Perro que hereda de Animal y sobrescribe hacerSonido() para devolver "Guau".

Clase Gato que hereda de Animal y devuelve "Miau".

Crea instancias y prueba los métodos.
*/

class Animales{
  constructor(nombre){
    this.nombre=nombre;
  }

  hacerSonido(){
   return "algun sonido..";
  }
}

class Perro extends Animales{

   hacerSonido(){
    return "Guau";
   }   
}

class Gato extends Animales{

    hacerSonido(){
      return "Miau";
    }
}

const animal = new Animales("Juan");
const perro = new Perro("Firulais");
const gato = new Gato("Garfield");

console.log(`${animal.nombre} hace: ${animal.hacerSonido()}`);
console.log (`${perro.nombre} hace: ${perro.hacerSonido()}`);
console.log (`${gato.nombre} hace: ${gato.hacerSonido()} `);