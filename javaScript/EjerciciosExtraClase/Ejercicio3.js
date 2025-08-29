// crea una funcion que reciba un string y devuelva el numero de vocales que contiene

let texto = prompt("Ingrese el texto:").toLowerCase();
let contador=0;

function devolucionVocales(texto) {
    if (isNaN(texto)) {
        alert("ingrese valor valido:");
        return;
    }
    if (texto === null || texto === undefined || texto.trim() === ""){
        alert("Ingrese un texto válido:");
        return;
    }
    else {
        for (let i = 0; i <= texto.length; i++) {
            if ("aeiou".includes(texto.charAt(i))) {
                contador++;
            }
        }
    }
    return contador;
}
console.log(contador);