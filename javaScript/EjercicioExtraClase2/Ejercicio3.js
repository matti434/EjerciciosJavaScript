const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const palabras = ["javascript", "programación", "computadora", "algoritmo", "desarrollo"];
const precios = [100, 200, 50, 300, 150, 75, 400];

//Mostrar palabras con más de 10 caracteres

const mostrarPalabrasMayoresA10 = palabras.filter (palabras => palabras.length > 10 )

console.log(mostrarPalabrasMayoresA10);