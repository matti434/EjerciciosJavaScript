/*8- Crea una clase llamada "Persona" que tenga las propiedades "nombre", "edad" y "profesión", y los métodos "saludar" y "despedirse". 
Luego, crea dos objetos de la clase "Persona" con diferentes valores para sus propiedades y llama a sus métodos "saludar" y "despedirse".*/

class Persona {
  constructor(nombre, edad, profesion) {
    this.nombre = nombre;
    this.edad = edad;
    this.profesion = profesion;
  }

  saludar(){
    
    return `Hola ${this.nombre} tu edad es: ${this.edad} y tu profesion: ${this.profesion}`;
    
  }

  despedirse(){
    return `Adios ${this.nombre} con edad: ${this.edad} y profesion: ${this.profesion}`;
  }
}

const persona1 = new Persona("Lopez",32,"maestro");
const persona2 = new Persona("julian",45,"maestro mayor de obra");

console.log(persona1.saludar());
console.log(persona1.despedirse());
console.log(persona2.saludar());
console.log(persona2.despedirse());