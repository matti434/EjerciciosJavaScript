/*
Clase Persona

Crea una clase Persona con nombre y edad.

Agrega un método presentarse() que muestre:
"Hola, soy [nombre] y tengo [edad] años".

Instancia dos personas y haz que se presenten.
*/

class Persona{

    constructor(nombre,edad){
        this.nombre=nombre;
        this.edad=edad;
    }

    presentarse(){
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años`)
    }
}
// No es como en java
// incorrecto
//Persona persona1 = new Persona ("Matias",24);
//Persona persona2 = new Persona ("Flor",25);

// correcto
const persona1 = new Persona ("Matias",24);
const persona2 = new Persona ("Flor",25);

persona1.presentarse();
persona2.presentarse();