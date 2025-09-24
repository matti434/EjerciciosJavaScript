/*
 * Crea una única función (importante que sólo sea una) que sea capaz
 * de calcular y retornar el área de un polígono.
 * - La función recibirá por parámetro sólo UN polígono a la vez.
 * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
 * - Imprime el cálculo del área de un polígono de cada tipo.
 */

function areaPoligono(poligono) {

 
}

const Triángulo = {
  tipo: "triángulo",
  base: 10,
  altura: 15,
};
const Cuadrado = {
  tipo: "cuadrado",
  lado: 10,
};
const Rectangulo = {
  tipo: "rectangulo",
  base: 20,
  altura: 15,
};

console.log(areaPoligono(Triángulo));
console.log(areaPoligono(Cuadrado));
console.log(areaPoligono(Rectangulo));
