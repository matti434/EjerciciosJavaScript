/*
9- Crea una clase llamada "Animal" que tenga las propiedades "nombre" y "edad", y el método "emitirSonido". 
Luego, crea dos clases hijas llamadas "Perro" y "Gato" que hereden de "Animal" y tengan su propio método "emitirSonido".
Finalmente, crea dos objetos, uno de la clase "Perro" y otro de la clase "Gato", 
y llama a sus métodos "emitirSonido" para verificar que cada animal emite el sonido adecuado. 
*/

class Animal{
 
    constructor(nombre,edad){
        this.nombre=nombre;
        this.edad=edad;
    }


    emitirSonido(){
        console.log("sonido de animal");
    }
}

class Perro extends Animal{

     constructor(nombre,edad){
        super(nombre,edad);
    }

    emitirSonido(){
        return "Guau guau";
    }
}

class Gato extends Animal{

     constructor(nombre,edad){
        super(nombre,edad);
    }

    emitirSonido(){
        return "Miau miau";
    }
}

const perro1 =new Perro("firu",5);
const gato1 =new Gato("gato",7);

console.log(perro1.emitirSonido());
console.log(gato1.emitirSonido());

