// Crea una funcion que reciba un array de numeros y devuelva el mayor de ellos

let numerosArray = [5, 7, 8, 9, 10, 15];
let mayor=0;

function obtenerMayor() {
    for (let i = 0; i < numerosArray.length; i++) {
        if (isNaN(numerosArray[i])) {
            return "Ingrese un valor valido";
        }
        else {
            if (numerosArray[i] > mayor) {
                mayor = numerosArray[i];
            }
        }
    }
    return mayor;
}
let respuesta=obtenerMayor(numerosArray);
console.log(respuesta);

