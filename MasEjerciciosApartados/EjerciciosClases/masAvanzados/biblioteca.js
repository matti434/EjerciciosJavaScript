/*
Clase Biblioteca

Clase Libro con propiedades: titulo, autor, anio.

Clase Biblioteca con una lista de libros.

Métodos:

agregarLibro(libro)

mostrarLibros() → lista todos los libros con título y autor.

Agrega varios libros y muestra la colección.
*/

<<<<<<< HEAD
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
=======
class Biblioteca{
    
    constructor(){
      this.libro=[];
    }

    agregarLibro(libros){
        this.libro.push(libros);
    }

    mostrarLibros() {
    console.log("📚 Biblioteca - Lista de Libros:");
    this.libro.forEach((libro, index) => {
        console.log (`${index + 1}. "${libro.titulo}" por ${libro.autor} (${libro.año})`);
    });
    }
}

class Libro{
    constructor(titulo,autor,anio){
        this.titulo=titulo;
        this.autor=autor;
        this.anio=anio;
    }
 
    
}
const biblio = new Biblioteca();
const libro1 = new Libro("Cien años", "García Márquez", 1967);

biblio.agregarLibro(libro1); // agrega el libro a la biblioteca;
biblio.mostrarLibros()
>>>>>>> f1d4569e3041b58fa60eea2484bf28db9545857a
