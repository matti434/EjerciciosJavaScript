// Crea una funcion que reciba un array de numeros y devuelva el mayor de ellos

let numerosArray = [];
let continuar = true;

do {
    let input = prompt("Ingrese un numero:");
    
   
    if (input === null) {
        continuar = false;
        break;
    }
    
    let numero = parseInt(input);
    
    if (isNaN(numero)) {
        alert("Ingrese un valor válido");
    } else {
        numerosArray.push(numero);
        continuar = confirm("¿Desea ingresar otro número?");
    }
    
} while (continuar);

function obtenerMayor(array) {
    if (array.length === 0) {
        return "No se ingresaron números válidos";
    }
    
    let mayor = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > mayor) {
            mayor = array[i];
        }
    }
    return mayor;
}

let respuesta = obtenerMayor(numerosArray);
console.log(respuesta);
