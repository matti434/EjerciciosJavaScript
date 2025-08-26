const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const palabras = ["javascript", "programación", "computadora", "algoritmo", "desarrollo"];
const precios = [100, 200, 50, 300, 150, 75, 400];

/*Encontrar el primer número divisible por 3*/

const encontrarNumeroDivisible3 = numeros.find(num => num % 3 === 0);

console.log(encontrarNumeroDivisible3);
