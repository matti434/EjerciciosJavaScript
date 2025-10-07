/*
 tener un arreglo devuelve un nuevo arreglo donde en cada posicion, tendras el producto de todos los numeros excepto de esa posicion
 no se puede usar la division.
*/

function arreglos(numeros) {
  let resultado = [];
  for (let i = 0; i < numeros.length; i++) {
    let producto = 1;

    for (let j = 0; j < numeros.length; j++) {
      if (j !== i) {
         producto = producto * numeros[j];
      }
    }
    resultado.push(producto);
  }
  return resultado;
}

console.log(arreglos(numeros[(1, 2, 3, 4)]));
