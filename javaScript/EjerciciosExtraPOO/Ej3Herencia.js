/*
Clase Animal con propiedad nombre y método hacerSonido().

Clase hija Perro con método hacerSonido() que devuelva "Guau!".

Clase hija Gato que devuelva "Miau!".

Clase Empleado con nombre y salario.

Clase hija Gerente con propiedad departamento y método detalles().
*/

class Animal {
  constructor(nombre) {
    this.nombreAnimal = nombre;
  }

  hacerSonido() {
    console.log("El animal hace un sonido.");
  }
}

class Perro extends Animal {
  hacerSonido() {
    return "Guai!";
  }
}

class Gato extends Animal{
    hacerSonido(){
        return "Miau!";
    }
}

let tipo;
do{
    
    tipo= prompt("Ingrese el tipo de animal (perro/gato)  y (salir) para terminar:").toLowerCase();
    const nombre = prompt("Ingrese el nombre:");

    switch(tipo){
        case "perro":
            const perro=new Perro(nombre);
            console.log(`${perro.nombreAnimal} y dice : ${perro.hacerSonido()}`);
            break;
        case "gato":
            const gato=new Gato(nombre);
            console.log(`${gato.nombreAnimal} y dice : ${gato.hacerSonido()}`);
            gato.hacerSonido;
            break;
        case "salir":
            console.log("saliendo del programa");
            break;
    default:
        const animal=new Animal(nombre);
        console.log(`${animal.nombreAnimal} dice: ${animal.hacerSonido} desconocido...`);
        break;
        
    }
}while(tipo!=="salir");

