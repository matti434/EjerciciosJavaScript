/*
Clase Biblioteca

Clase Libro con propiedades: titulo, autor, anio.

Clase Biblioteca con una lista de libros.

Métodos:

agregarLibro(libro)

mostrarLibros() → lista todos los libros con título y autor.

Agrega varios libros y muestra la colección.
*/

class Biblioteca {

   constructor(){
     this.libro=[];
   }

   agregarLibro(libro){
     this.libro.push(libro)
   }

}

class Libro{
   
    constructor(titulo,autor,año){

    }

    agregarLibro(titulo,autor,año){
       this.titulo=titulo;
       this.autor=autor;
       this.año=año;
    }
}

const libro = new Libro("titulo1","gabriel",1974);

libro.agregarLibro(libro);

console.log(libro);