const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const palabras = ["javascript", "programación", "computadora", "algoritmo", "desarrollo"];
const precios = [100, 200, 50, 300, 150, 75, 400];

//Crear array con la primera letra de cada palabra

const primeraLetrDeCadaPalabra = palabras.map((primera) => primera.charAt(0));

console.log(primeraLetrDeCadaPalabra);
