let numeros = [10, 21, 32, 43, 54, 65, 76];
let pares = [];
let impares = [];

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 === 0) {
    pares.push(numeros[i]);
  } else {
    impares.push(numeros[i]);
  }
}

console.log("Pares: " + pares);
console.log("Impares: " + impares);