/*
Clase Producto con nombre, precio.

Clase Carrito que tenga un array de productos y métodos:

agregarProducto(producto)

calcularTotal()

Clase Biblioteca que gestione Libros.

Clase Libro con titulo, autor, disponible.

Métodos de Biblioteca:

agregarLibro()

prestarLibro(titulo) (marca como no disponible).

devolverLibro(titulo)
*/

class Producto{
    constructor(nombre,precio){
      this.nombre=nombre;
      this.precio=precio;
    }
}