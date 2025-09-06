/*
Clase Estudiante

Propiedades: nombre, notas (array).

Métodos:

agregarNota(nota) → agrega una nota al array.

promedio() → calcula y devuelve el promedio.

aprobado() → devuelve true si el promedio ≥ 6.
*/

class Estudiante{
    constructor(nombre,notas){
       this.nombre=nombre;
       this.notas=[];
    }


    agregarNota(){
        this.notas.push(notas);
    }

    promedio(){
        let total=0;
        let promedio=0;
        for(let i=0;i<=this.notas.length;i++){
           total += this.notas[i];
        }
        promedio =(total*this.notas.length)/100;
        return `El promedio de las notas es: ${promedio}`;
    }

    aprobado(){
        
        if(this.promedio>=6){

            return `El alumno ${this.nombre} : ${true}`;
        }
    }
}