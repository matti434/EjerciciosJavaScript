/*
 * Crea una función que reciba dos cadenas como parámetro (str1, str2)
 * e imprima otras dos cadenas como salida (out1, out2).
 * - out1 contendrá todos los caracteres presentes en la str1 pero NO
 *   estén presentes en str2.
 * - out2 contendrá todos los caracteres presentes en la str2 pero NO
 *   estén presentes en str1.
 */
function diferencias(str1, str2) {
  let out1 = "";
  let out2 = "";


  for (let char of str1) {
    if (!str2.includes(char)) {
      out1 += char;
    }
  }


  for (let char of str2) {
    if (!str1.includes(char)) {
      out2 += char;
    }
  }

  console.log("out1:", out1);
  console.log("out2:", out2);
}

// Ejemplo de uso
diferencias("hola", "halo");
