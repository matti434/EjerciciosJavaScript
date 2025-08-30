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

const productosConStock = producto.filter((producto) => producto.stock > 0);
console.table(productosConStock);

// map trasforma cada elemento del array
const arrayNombresPrecios = producto.map((producto) => ({
  nombre: producto.nombre,
  precio: producto.precio,
}));
console.table(arrayNombresPrecios);

const filtrarTecnologia = producto.filter(
  (producto) => producto.categoria === "tecnologia" && producto.stock > 0
);
console.table(filtrarTecnologia);

const encontrarMonitor = producto.find(
  (producto) => producto.nombre.toLowerCase() === "monitor".toLowerCase()
);
console.table(encontrarMonitor);


/*
Mostrar estudiantes con promedio mayor a 8.0

Crear un array solo con nombres y carreras

Filtrar estudiantes de Ingeniería mayores de 19 años

Encontrar al estudiante con ID 3
*/

const estudiantes = [
  { id: 1, nombre: "Ana", edad: 20, promedio: 8.5, carrera: "Ingeniería" },
  { id: 2, nombre: "Carlos", edad: 22, promedio: 7.2, carrera: "Medicina" },
  { id: 3, nombre: "Chancho", edad: 2, promedio: 9.1, carrera: "Ingeniería" },
  { id: 4, nombre: "Luis", edad: 21, promedio: 6.8, carrera: "Derecho" },
  { id: 5, nombre: "Sofía", edad: 20, promedio: 8.9, carrera: "Ingeniería" },
];

const promedio8 = estudiantes.filter((estudiantes) => estudiantes.promedio>8.0);
console.table(promedio8);

const nombresCarreras = estudiantes.map((estudiantes) =>({
   nombre: estudiantes.nombre,
   carrera: estudiantes.carrera,
}))
console.table(nombresCarreras);

const mayores19 = estudiantes.filter((estudiantes) => estudiantes.carrera.toLowerCase() === "ingenieria".toLowerCase() && estudiantes.edad>19);
console.table(mayores19);

const encontrarId3 = estudiantes.find((estudiantes) => estudiantes.id == 3);
console.table(encontrarId3);


/*
Actividades:

Mostrar las tareas que están pendientes (no completadas)

Crear un array solo con las descripciones de las tareas

Filtrar las tareas de alta prioridad que no están completadas

Encontrar la tarea que contiene "JavaScript" en su descripción
*/

const tareas= [
{ id: 1, descripcion: "Hacer ejercicio", completada: true, prioridad: "alta" }, 
{ id: 2, descripcion: "Estudiar JavaScript", completada: false, prioridad: "alta" }, 
{ id: 3, descripcion: "Comprar víveres", completada: false, prioridad: "media" }, 
{ id: 4, descripcion: "Llamar al médico", completada: true, prioridad: "baja" }, 
{ id: 5, descripcion: "Limpiar la casa", completada: false, prioridad: "media" }, 
];

const tareasPendientes = tareas.filter((tareas)=> tareas.completada === false);
console.table(tareasPendientes);

const descripcionTareas = tareas.map((tareas) => tareas.descripcion);
console.table(descripcionTareas);

const tareasAltaPrioriedad = tareas.filter((tareas)=> tareas.prioridad.toLowerCase() === "alta".toLowerCase() && tareas.completada === false);
console.table(tareasAltaPrioriedad);

const encontrarTarea = tareas.find((tareas) => tareas.descripcion.toLowerCase().includes("javascript"));
console.table(encontrarTarea);