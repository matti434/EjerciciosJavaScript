const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const palabras = ["javascript", "programación", "computadora", "algoritmo", "desarrollo","oscar"];
const precios = [100, 200, 50, 300, 150, 75, 400];


//Encontrar primera palabra que termine con 'o'

const palabrasTerminenConO = palabras.filter((palabra) => ("o").includes(palabra.charAt(0)));

console.log(palabrasTerminenConO);
