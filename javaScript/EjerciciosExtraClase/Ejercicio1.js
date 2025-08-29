// 1 crea una funcion que reciba dos numeros y devuelva su suma

function sumarNumeros(a, b) {
  if (isNaN(a) || isNaN(b) || a === null || b === null) {
    return "Error: Ingrese números válidos";
  }
  const a = Number(a);
  const b = Number(b);

  if (isNaN(a) || isNaN(b)) {
    return "Error: Ingrese números válidos";
  }
  return a + b;
}

let variableA = parseFloat(prompt("Ingrese el primer número:"));
let variableB = parseFloat(prompt("Ingrese el segundo número:"));
let resultado = sumarNumeros(variableA, variableB);
