/*

4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.

*/

class Producto {
  constructor(codigo,nombre,precio) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
  }

  imprimirDatos() {
    console.log(
      `El codigo es : ${this.codigo} , el nombre: ${this.nombre} , y el precio: ${this.precio}`
    );
  }
}

// creando instancias

const producto1 = new Producto("P001", "Remera", "10000");
const producto2 = new Producto("P002", "Zapatilla", "12000");
const producto3 = new Producto("P003", "Pantalon", "15000");

// guardando en un array
const productos = [producto1, producto2, producto3];

// mostrando los datos forma 1
productos.forEach((producto, index) => producto.imprimirDatos());

// mostrando los datos forma 2
productos.forEach((producto, index) => {
  console.log(`Producto ${index + 1}:`);
  producto.imprimirDatos();
});
