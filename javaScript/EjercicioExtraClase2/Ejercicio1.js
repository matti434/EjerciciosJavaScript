const { __unstable__loadDesignSystem } = require("tailwindcss");

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const palabras = ["javascript", "programación", "computadora", "algoritmo", "desarrollo"];
const precios = [100, 200, 50, 300, 150, 75, 400];


// Números pares mayores a 5
const numerosParesMayoresA5 = numeros.filter(num => num > 5 && num % 2 === 0);

console.log(numerosParesMayoresA5)