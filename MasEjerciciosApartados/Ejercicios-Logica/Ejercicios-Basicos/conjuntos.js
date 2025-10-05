function encontrarElementosOptimizado(array1, array2, buscarComunes) {
  const resultado = [];

  function elementoExisteEnArray(elemento, array) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === elemento) return true;
    }
    return false;
  }

  function elementoExisteEnResultado(elemento) {
    for (let i = 0; i < resultado.length; i++) {
      if (resultado[i] === elemento) return true;
    }
    return false;
  }

  if (buscarComunes) {
    for (let i = 0; i < array1.length; i++) {
      const elemento = array1[i];
      if (
        elementoExisteEnArray(elemento, array2) &&
        !elementoExisteEnResultado(elemento)
      ) {
        resultado.push(elemento);
      }
    }
  } else {
    for (let i = 0; i < array1.length; i++) {
      const elemento = array1[i];
      if (
        !elementoExisteEnArray(elemento, array2) &&
        !elementoExisteEnResultado(elemento)
      ) {
        resultado.push(elemento);
      }
    }
    for (let i = 0; i < array2.length; i++) {
      const elemento = array2[i];
      if (
        !elementoExisteEnArray(elemento, array1) &&
        !elementoExisteEnResultado(elemento)
      ) {
        resultado.push(elemento);
      }
    }
  }

  return resultado;
}
