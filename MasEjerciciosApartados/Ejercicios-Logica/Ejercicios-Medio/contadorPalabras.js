/*
 * Crea un programa que cuente cuantas veces se repite cada palabra
 * y que muestre el recuento final de todas ellas.
 * - Los signos de puntuación no forman parte de la palabra.
 * - Una palabra es la misma aunque aparezca en mayúsculas y minúsculas.
 * - No se pueden utilizar funciones propias del lenguaje que
 *   lo resuelvan automáticamente.
 */

function verificarSignos(valor) {
  let palabraLimpia = "";
  const signosPuntuacion = "?¿!¡.,;:";
  for (let i = 0; i < valor.length; i++) {
    const caracteres = valor[i];
    if (!signosPuntuacion.includes(caracteres)) {
      palabraLimpia += caracteres;
    }
  }

  console.log(palabraLimpia);
  return palabraLimpia;
}

function contarPalabras(palabra) {
  const contador = {};
  const palabrasContar = palabra.toLowerCase().split(" ");

  for (let i = 0; i < palabrasContar.length; i++) {
    // Limpio cada palabra individualmente
    const palabrasContarLimpia = verificarSignos(palabrasContar[i]);

    if (contador[palabrasContarLimpia] === undefined) {
      contador[palabrasContarLimpia] = 1;
    } else {
      contador[palabrasContarLimpia] += 1;
    }
  }

  return contador;
}

console.log(contarPalabras("Hola como estas? hola"));
