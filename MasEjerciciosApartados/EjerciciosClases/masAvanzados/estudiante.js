/*
Clase Estudiante

Propiedades: nombre, notas (array).

Métodos:

agregarNota(nota) → agrega una nota al array.

promedio() → calcula y devuelve el promedio.

aprobado() → devuelve true si el promedio ≥ 6.
*/

class Estudiante{
    constructor(nombre, notas = []){
       this.nombre=nombre;
       this.notas=notas;
    }


    agregarNota(nota){
        this.notas.push(nota);
    }

    promedio(){
        if(this.notas.length === 0) return 0; // si el array esta vacio devuelve 0
        let total = this.notas.reduce((acc,nota) => acc+nota,0); // acc es acumulador empieza en 0
        return total / this.notas.length;
    }

    aprobado(){
        /*
        this.notas.forEach((n)=>{
            if(c>=6){
                console.log(`El alumno ${this.nombre} esta aprobado con ${this.notas}`);
            }
        })
        Creo que es una forma tambien correcta de acerlo */
        // mas corto y simple
        /*
        if(this.promedio()>=6){
          return `El alumno ${this.nombre} esta aprobado con un promedio ${this.promedio}`;
        }
         Me pide devolver true o false por lo que esto es ineccesario 
         */
        return this.promedio()>=6;
    }

    mostrarNota(){
        console.log(`Notas de ${this.nombre}: [${this.notas.join(', ')}]`);
    }
}

const alumno = new Estudiante("Matias", [7, 8, 10]);
alumno.agregarNota(5);
alumno.mostrarNota(); // Notas de Matias: [7, 8, 10,5]

console.log(`Promedio: ${alumno.promedio()}`);
console.log(`¿Aprobado? ${alumno.aprobado() ? 'Sí' : 'No'}`);