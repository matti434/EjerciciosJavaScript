/*
Mostrar la primera letra de un texto:
Crea una función que reciba un texto y devuelva su primera letra con .charAt().
*/

function primeraLetra(texto) {
  if (isNaN(texto) || texto.trim() === "") {
    return "Ingrese un texto válido";
  } else {
    for (let i = 0; i <= texto.length; i++) {
      return texto.charAt(0);
    }
  }
}

let texto = prompt("ingrese el texto");
let respuesta = primeraLetra(texto);
console.log(respuesta);
