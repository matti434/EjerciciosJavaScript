/*
 * Crea una única función (importante que sólo sea una) que sea capaz
 * de calcular y retornar el área de un polígono.
 * - La función recibirá por parámetro sólo UN polígono a la vez.
 * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
 * - Imprime el cálculo del área de un polígono de cada tipo.
 */

function areaPoligono(poligono) {

  switch (poligono.tipo) {
    case "triángulo":
      const areaTriangulo = (poligono.base * poligono.altura) / 2;
      console.log("El area del triangulo es: "+areaTriangulo);
      return areaTriangulo;
    
    case "cuadrado":
      const areaCuadrado = poligono.lado*poligono.lado;
      console.log("El area del cuadrado es: "+areaCuadrado);
      return areaCuadrado;
      
    case "rectangulo":
      const areaRectangulo = poligono.base*poligono.altura;
      console.log("El area del rectangulo es: "+areaRectangulo);
      return areaRectangulo;
    
    default :
      console.log("Opcion no valida");
      break;
  }
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
