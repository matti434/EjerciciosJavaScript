/*
Crea una clase Persona con propiedades: nombre, edad y un método saludar() que muestre "Hola, soy [nombre] y tengo [edad] años.".

Instancia 2 objetos y haz que cada uno se presente.

Clase Coche con propiedades: marca, modelo, año.

Agrega un método detalles() que devuelva "Coche: [marca] [modelo] ([año])".

class Persona{
   
constructor(nombre,edad){
    this.nombre=nombre;
    this.edad=edad;
}

    saludar(){
        console.log(` Hola mi nombre es : ${this.nombre} y mi edad es ${this.edad}`);
    }
 }

 const nombre = prompt("Ingrese su nombre");
 const edad = prompt("Ingrese su edad");

 const persona = new Persona(nombre,edad);
 persona.saludar();

 class Coche{
    constructor(marca,modelo,anio){
       this.marca=marca;
       this.modelo=modelo;
       this.anio=anio;    
    }
    
    detalles(){
        console.log(`La marca del coche es ${this.marca} su modelo es ${this.modelo} y es del año ${this.anio}`);
    }
 }

 const marca = prompt("Ingrese la marca del vehiculo");
 const modelo = prompt("Ingrese el modelo del vehiculo");
 const anio = prompt("Ingrese el año del vehiculo");
 
 const coche=new Coche(marca,modelo,anio);
 coche.detalles();
 
 Dejo comentada por que quiero probar Node pero parece que tiene problemas con los prompt
 
 */

 const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    console.log(`Hola mi nombre es: ${this.nombre} y mi edad es ${this.edad}`);
  }
}

class Coche {
  constructor(marca, modelo, anio) {
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
  }

  detalles() {
    console.log(`La marca del coche es ${this.marca}, su modelo es ${this.modelo} y es del año ${this.anio}`);
  }
}

// Pedimos datos
rl.question("Ingrese su nombre: ", (nombre) => {
  rl.question("Ingrese su edad: ", (edad) => {
    const persona = new Persona(nombre, edad);
    persona.saludar();

    rl.question("Ingrese la marca del vehículo: ", (marca) => {
      rl.question("Ingrese el modelo del vehículo: ", (modelo) => {
        rl.question("Ingrese el año del vehículo: ", (anio) => {
          const coche = new Coche(marca, modelo, anio);
          coche.detalles();
          rl.close();
        });
      });
    });
  });
});
