/*
 * Escribe una función que calcule si un número dado es un número de Armstrong
 * (o también llamado narcisista).
 * Si no conoces qué es un número de Armstrong, debes buscar información
 * al respecto.
 */

function numeroArmstrong(numero) {
  let numeroStr = String(numero);
  let suma = 0;
  for (let i = 0; i < numeroStr.length; i++) {
    let aux = parseInt(numeroStr[i]);

    let potencia = aux ** numeroStr.length;
    suma += potencia;
    console.log(suma);
  }
  
  if(suma === numero){
    return `${numero} es un número de Armstrong`;
  }
}

console.log(numeroArmstrong(153));
