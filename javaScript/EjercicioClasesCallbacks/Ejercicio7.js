const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const palabras = ["javascript", "programación", "computadora", "algoritmo", "desarrollo"];
const precios = [100, 200, 50, 300, 150, 75, 400];

//Crear array con descuento del 15%

const preciosConDescuento = precios.map((precio) => precio * 0.85);

console.log(preciosConDescuento);
