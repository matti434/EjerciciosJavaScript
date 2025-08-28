/*
Eliminar un elemento de un array según su posición:
Crea una función que reciba un array y una posición, y elimine el elemento con .splice().
*/

function eliminarPosicion(array,posición){
     
    array.splice(posición,1);
    return array;

}

let arrayelementos= prompt("Ingrese los elementos separados por coma:");
let array=arrayelementos.split(",");
let posición=parseInt(prompt("Ingrese la posicion"));
let resultado=eliminarPosicion(array,posición)
console.log(resultado);