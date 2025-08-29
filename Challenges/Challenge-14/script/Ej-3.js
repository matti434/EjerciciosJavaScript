/*
Eliminar el primer elemento de un array:
Crea una función que reciba un array y elimine su primer elemento usando .shift().
*/
function primerElemento(array,elemento){

      array.shift();
      return array;

}

let arrayelementos= prompt("Ingrese los elementos separados por coma:");
let array=arrayelementos.split(",");
let resultado=primerElemento(array)
console.log(resultado);