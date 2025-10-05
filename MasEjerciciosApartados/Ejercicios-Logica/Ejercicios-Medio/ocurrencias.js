/* Contar ocurrencias de cada elemento*/

function contarOcurrencias(arr) {
  const contador = {};
  for (let i = 0; i < arr.length; i++) {
    const elemento = arr[i];

    if (contador[elemento] === undefined) {
      contador[elemento] = 1;
    } else {
      contador[elemento] += 1;
    }
  }
  return contador;
}

console.log(contarOcurrencias(["a", "b", "a", "c", "b", "a"]));
