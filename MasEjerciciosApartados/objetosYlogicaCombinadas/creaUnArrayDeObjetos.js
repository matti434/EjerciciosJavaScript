/*
Crea un array de objetos libros, cada uno con titulo, autor y año. Recorre el array y muestra solo los títulos.
*/

const libros= [
    { titulo: "Cien años de soledad", autor: "Gabriel García Márquez", anio: 1967 },
    { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes", anio: 1605 },
    { titulo: "El Principito", autor: "Antoine de Saint-Exupéry", anio: 1943 }
];

libros.forEach((libro)=>{
    console.log(`El libro: ${libro.titulo} del autor: ${libro.autor} del año: ${libro.anio}`);
});