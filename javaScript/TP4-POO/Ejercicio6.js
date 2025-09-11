/*
6- Crear una clase Libro que contenga al menos las siguientes propiedades:
ISBN // codigo de un libro
Título
Autor
Número de páginas

Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:

“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.

*/
class Libro {
    constructor(ISBN, titulo, autor, numeroPaginas) {
        this._ISBN = ISBN;
        this._titulo = titulo;
        this._autor = autor;
        this._numeroPaginas = numeroPaginas;
    }

    // obtener algo
    get ISBN() {
        return this._ISBN;
    }

    // cambiar algo
    set ISBN(nuevoISBN) {

        if (nuevoISBN === undefined || nuevoISBN === null) {
            console.log("Ingrese valores validos no nulos");
            return;
        }

        // convertir a string y quitar espacios
        const isbnString = String(nuevoISBN).trim();


        if (isbnString === "") {
            console.log("El ISBN no debe estar vacio");
            return;
        }

        if (isbnString.length < 4 || isbnString.length > 20) {
            console.log("El ISBN debe tener al menos 4 caracteres y maximo 20");
            return;
        }

        // Validación CORRECTA para números:
        // Usar expresión regular para verificar que TODOS los caracteres son dígitos
        if (!/^\d+$/.test(isbnString)) {
            console.log("El ISBN debe ser un numero 0-9");
            return;
        }

        this._ISBN = isbnString;
        console.log("El ISBN se modifico correctamente" + this._ISBN);
    }

    get titulo(){
        return this.titulo;
    }

    set titulo(nuevoTitulo){
       
        const nuevoTituloStr = String(nuevoTitulo).trim();

        if(nuevoTituloStr === ""){
            console.log("No debe estar vacio");
            return;
        }
        if(nuevoTituloStr.length < 4 || nuevoTituloStr.length > 50){
            console.log("No puede tener menos de 4 caracteres y maximo 50");
            return;
        }
        

        this._titulo = nuevoTituloStr;
        console.log("El titulo se modifico correctamente" + this._titulo);
    }

    get autor(){
        return this.autor;
    }

    set autor(nuevoAutor){
        if(nuevoAutor === undefined || nuevoAutor === null){
            console.log("Los valores ingresados no pueden ser nulos ni indefinidos");
            return;
        }

        const nuevoAutorStr = String(nuevoAutor).trim();

        if(nuevoAutorStr === ""){
            console.log("No debe estar vacio");
            return;
        }

        if(nuevoAutorStr.length < 4 || nuevoAutorStr.length > 30){
            console.log("No puede tener menos de 4 caracteres y maximo 30");
            return;
        }

        if(/^[0-9]+$/.test(nuevoAutorStr)){
             console.log("El nombre del autor no puede contener numeros ni caracteres especiales");
             return;
        }

        this.autor= nuevoAutorStr;
        console.log("El autor se modifico correctamente" + this._autor);

    }



}


const libro1 = new Libro("978-3-16-148410-0", "Cien años de soledad", "García Márquez", 432);
console.log(libro1);

libro1._titulo= "El amor en los tiempos de colera";
console.log(libro1);
libro1.ISBN = 3505; 
console.log(libro1);