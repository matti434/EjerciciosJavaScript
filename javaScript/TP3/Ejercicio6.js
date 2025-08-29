/*
6- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.

La fórmula del perímetro  es p = 2*(a +b)

Ejemplo:

*/

function perimetroRectangulo(ladoA,ladoB){
    return perimetro = 2*(ladoA+ladoB);
}

let ladoA= parseFloat(prompt("Ingrese el valor del lado A del rectangulo:"));
let ladoB= parseFloat(prompt("Ingrese el valor del lado B del rectangulo:"));

let resultado= perimetroRectangulo(ladoA,ladoB);

alert(`El perimetro del rectángulo con lados ${ladoA} y ${ladoB} es: ${resultado}`);