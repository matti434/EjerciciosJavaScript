const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const palabras = ["javascript", "programación", "computadora", "algoritmo", "desarrollo"];
const precios = [100, 200, 50, 300, 150, 75, 400];

//Palabras que empiezan con vocal

const palabrasEmpiezanConVocal = palabras.filter((palabra) => ("aeiou").includes(palabra.charAt(0)));

console.log(palabrasEmpiezanConVocal);
