/* Generar serie Fibonacci */

const cantidad = 10;
let siguiente = 0;
let anterior = 0;
let actual= 1;
for (let i = 0; i < cantidad; i++) {

    console.log(anterior);
    siguiente = anterior + actual;
    anterior = actual;
    actual = siguiente;
    
}