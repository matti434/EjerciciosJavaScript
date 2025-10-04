let numeros = [12, 45, 2, 78, 34, 5, 99, 1];
let maximo = numeros[0];
let minimo = numeros[0];

for (let i = 1; i < numeros.length; i++) {
  if (numeros[i] > maximo) {
    maximo = numeros[i];
  }
  if (numeros[i] < minimo) {
    minimo = numeros[i];
  }
}

console.log("Número mayor: " + maximo);
console.log("Número menor: " + minimo);
