/*
Array:

[ { id: 1, nombre: "Laptop", precio: 1200, categoria: "tecnologia", stock: 15 },
{ id: 2, nombre: "Mouse", precio: 25, categoria: "tecnologia", stock: 0 },
{ id: 3, nombre: "Silla", precio: 150, categoria: "muebles", stock: 8 },
{ id: 4, nombre: "Monitor", precio: 300, categoria: "tecnologia", stock: 12 },
{ id: 5, nombre: "Teclado", precio: 45, categoria: "tecnologia", stock: 0 } ]

Actividades:

Mostrar todos los productos que tienen stock disponible

Crear un array solo con los nombres y precios de los productos

Filtrar los productos de tecnología que tienen stock

Encontrar el producto llamado "Monitor"
*/

const producto = [
  { id: 1, nombre: "Laptop", precio: 1200, categoria: "tecnologia", stock: 15 },
  { id: 2, nombre: "Mouse", precio: 25, categoria: "tecnologia", stock: 0 },
  { id: 3, nombre: "Silla", precio: 150, categoria: "muebles", stock: 8 },
  { id: 4, nombre: "Monitor", precio: 300, categoria: "tecnologia", stock: 12 },
  { id: 5, nombre: "Teclado", precio: 45, categoria: "tecnologia", stock: 0 },
];

const productosConStock = producto.filter(producto => producto.stock > 0);
console.table(productosConStock);

// map trasforma cada elemento del array
const arrayNombresPrecios = producto.map(producto => ({
   nombre:producto.nombre,
   precio:producto.precio,
}
));
console.table(arrayNombresPrecios);

const filtrarTecnologia = producto.filter(producto => producto.categoria === "tecnologia" && producto.stock > 0);
console.table(filtrarTecnologia);

const encontrarMonitor = producto.find(producto => producto.nombre.toLowerCase() === "monitor".toLowerCase());
console.table(encontrarMonitor);
