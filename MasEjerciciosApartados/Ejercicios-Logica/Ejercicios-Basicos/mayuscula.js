/*
 * Crea una función que reciba un String de cualquier tipo y se encargue de
 * poner en mayúscula la primera letra de cada palabra.
 * - No se pueden utilizar operaciones del lenguaje que
 *   lo resuelvan directamente.
 */

function mayuscula(st) {
  let resultado = "";

  for (let i = 0; i < st.length; i++) {
    let letra = st[i];
    if (i === 0 || st[i - 1] === " ") {
      resultado += letra.toUpperCase();
    } else {
      resultado += letra;
    }
  }
  return resultado;
}
console.log(mayuscula("hola como estas?"));
