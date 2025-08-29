/*Agregar un elemento al final del array: 
Crea una función que reciba un array y un elemento, y lo agregue al final usando .push().
*/

function elementoFinal(array,elemento){
    array.push(elemento);
    return array;
}

let arrayelemento=prompt("Ingrese los elementos separado por coma:");
let array=arrayelemento.split(",");
let elemento=prompt("Ingrese el ultimo elemento:");
let resultado = elementoFinal(array,elemento);
console.log(resultado);