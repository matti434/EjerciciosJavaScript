/*
 Clase Tienda

Propiedades: nombre, productos (array).

Métodos:

agregarProducto(producto) → recibe un objeto Producto.

listarProductos() → muestra todos los productos con su stock y precio.

buscarProducto(nombre) → devuelve el producto si existe.
*/

class Tienda {
  constructor(nombre) {
    this.nombre = nombre;
    this.productos = [];
  }

  agregarProducto(producto) {
    this.productos.push(producto);
  }

  listarProductos(){
    this.productos.forEach(p => {
        //console.table(` Productos: ${p.nombre} || stock: ${p.stock} || precio: ${p.precio}`);
        console.table(this.productos); // table no adminite string por lo que es mejor mandarle productos, aunque para mas control es mejor arriba.
    })
  }

  buscarProducto(nombre)// recibo un parametro que lo nombre nombre
  {
     const producto = this.productos.find(p => p.nombre === nombre); // ese parametro lo busco dentro de producto
     return producto || `Producto ${nombre} no encontrado`;
  }
}

class Productos {
  constructor(nombre, stock, precio) {
    this.nombre = nombre;
    this.stock = stock;
    this.precio = precio;
  }
}

// Creo intancias de productos
const banana = new Productos("Banana", 50, 100);
const manzana = new Productos("Manzana", 30, 120);

// Creo la tienda
const tienda1 = new Tienda("Supermercado");

// Agrego productos a la tienda
tienda1.agregarProducto(banana);
tienda1.agregarProducto(manzana);

//listo los productos
tienda1.listarProductos();

// Busco un producto
console.log(tienda1.buscarProducto("Banana")); // envio el parametro a buscarProducto
console.log(tienda1.buscarProducto("Pera"));