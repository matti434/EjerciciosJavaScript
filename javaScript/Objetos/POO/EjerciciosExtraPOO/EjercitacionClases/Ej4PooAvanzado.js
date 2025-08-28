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

class Carrito{

  constructor(productos){
    this.productos=[];
  }

  agregarProductos(producto){
    this.productos.push(producto)
     console.log(`${producto.nombre} agregado al carrito ($${producto.precio})`);
  }

  calcularTotal(){
    let total=0;
    for(let producto of this.productos){
      total+=producto.precio;
    }
    return total;
  }

    mostrarCarrito() {
    console.log("Carrito de compras:");
    this.productos.forEach((p, i) => {
      console.log(`${i + 1}. ${p.nombre} - $${p.precio}`);
    });
    console.log(`Total: $${this.calcularTotal()}`);
  }
}

const carrito = new Carrito();

const p1 = new Producto("Camiseta", 3000);
const p2 = new Producto("Pantalón", 5000);
const p3 = new Producto("Zapatillas", 10000);

carrito.agregarProductos(p1);
carrito.agregarProductos(p2);
carrito.agregarProductos(p3);

carrito.mostrarCarrito();