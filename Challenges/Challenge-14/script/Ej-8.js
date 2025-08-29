/* 
Extraer una parte de un array:
Crea una función que reciba un array y devuelva una parte usando .slice().
*/

function extraerParteArray(array, inicio, fin) {
    return array.slice(inicio, fin);
}

let arrayElementos = prompt("Ingrese los elementos separados por coma:");
let array = arrayElementos.split(",");
let inicio = parseInt(prompt("Ingrese la posición inicial:"));
let fin = parseInt(prompt("Ingrese la posición final:"));

let resultado = extraerParteArray(array, inicio, fin);
console.log("Parte extraída:", resultado);
console.log("Array original:", array);