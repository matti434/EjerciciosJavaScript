/*
Crea una función que reciba un array de números y devuelva el mayor de ellos.
*/

function encontrarMayor(numeros) {
    if (numeros.length === 0) return null;
    
    let mayor = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > mayor) {
            mayor = numeros[i];
        }
    }
    return mayor;
}


let numeros = [3, 7, 2, 9, 5];
let resultadoMayor = encontrarMayor(numeros);
console.log(resultadoMayor);