/* Encontrar el primer carácter no repetido */

function primerNoRepetido(elementos) {
  const noRepetido = {};
  for (let i = 0; i < elementos.length; i++) {
    const elem= elementos[i];
    if (noRepetido[elem] === undefined) {
      noRepetido[elem] = 1;
    } else {
      noRepetido[elem] += 1;
    }
  }
  for (let j = 0; j < elementos.length; j++) {
    const elem = elementos[j];
    if (noRepetido[elem] === 1) {
      return elem;
    }
  }
}

console.log(primerNoRepetido("abacabad")); // "c"
