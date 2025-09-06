/*
Clase Rectángulo

Propiedades: ancho, alto.

Métodos:

area() → devuelve el área.

perimetro() → devuelve el perímetro.

Crea dos rectángulos y muestra sus áreas y perímetros.
*/

class Rectángulo {
  constructor(ancho, alto) {
    this.ancho = ancho;
    this.alto = alto;
  }

  area() {
    const resultadoArea = this.ancho * this.alto;
    console.log(`El area del rectangulo es: ${resultadoArea}`);
    return resultadoArea; // <-- es buena practica devolver el valor
  }

  perimetro(){
    const resultadoPerimetro = this.ancho * 2 + this.alto * 2;
    console.log(`El perimetro del rectangulo es: ${resultadoPerimetro}`);
    return resultadoPerimetro;
  }
}

const rec1 = new Rectángulo(2, 5);
const rec2 = new Rectángulo(4, 6);

rec1.area();
rec1.perimetro();
rec2.area();
rec2.perimetro();
