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

  toString() {
    return `El libro ${this._titulo} con ISBN ${this._ISBN} creado por el autor ${this._autor} tiene páginas ${this._numeroPaginas}`;
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

  get titulo() {
    return this._titulo;
  }

  set titulo(nuevoTitulo) {
    const nuevoTituloStr = String(nuevoTitulo).trim();

    if (nuevoTituloStr === "") {
      console.log("No debe estar vacio");
      return;
    }
    if (nuevoTituloStr.length < 4 || nuevoTituloStr.length > 50) {
      console.log("No puede tener menos de 4 caracteres y maximo 50");
      return;
    }

    this._titulo = nuevoTituloStr;
    console.log("El titulo se modifico correctamente" + this._titulo);
  }

  get autor() {
    return this._autor;
  }

  set autor(nuevoAutor) {
    if (nuevoAutor === undefined || nuevoAutor === null) {
      console.log("Los valores ingresados no pueden ser nulos ni indefinidos");
      return;
    }

    const nuevoAutorStr = String(nuevoAutor).trim();

    if (nuevoAutorStr === "") {
      console.log("No debe estar vacio");
      return;
    }

    if (nuevoAutorStr.length < 4 || nuevoAutorStr.length > 30) {
      console.log("No puede tener menos de 4 caracteres y maximo 30");
      return;
    }

    if (/^[0-9]+$/.test(nuevoAutorStr)) {
      console.log(
        "El nombre del autor no puede contener numeros ni caracteres especiales"
      );
      return;
    }

    this._autor = nuevoAutorStr;
    console.log("El autor se modifico correctamente" + this._autor);
  }

  get numeroPaginas() {
    return this._numeroPaginas;
  }

  set numeroPaginas(nuevoNumeroPaginas) {
    if (nuevoNumeroPaginas === undefined || nuevoNumeroPaginas === "") {
      console.log("Los valores ingresados no pueden ser nulos ni indefinidos");
      return;
    }

    const numeroPaginasStr = String(nuevoNumeroPaginas).trim();

    if (numeroPaginasStr === "") {
      console.log("No puede estar vacio");
      return;
    }

    // ✅ CORRECTO - Debe rechazar si NO son números
    if (!/^[0-9]+$/.test(numeroPaginasStr)) {
      console.log("Deben ser números");
      return;
    }

    const numeroPaginasInt = parseInt(numeroPaginasStr);

    if (numeroPaginasInt < 88 || numeroPaginasInt > 13095) {
      console.log(
        "El libro no puede tener menos de 88 paginas ni mas de 13095"
      );
      return;
    }

    this._numeroPaginas = numeroPaginasInt;

    console.log(
      "Cantidad de paginas del libro correctamente cargada" + this._numeroPaginas
    );
  }

  /*
  Un método estático es un método que pertenece a la clase misma, no a las instancias (objetos) de la clase.
   Se define con la palabra clave static y se llama directamente sobre la clase, no sobre un objeto.
  */
  static compararPaginas(libroA, libroB) {
    //Esta condición es una validación de tipo que verifica si los parámetros recibidos son realmente instancias de la clase Libro
    if (!(libroA instanceof Libro) || !(libroB instanceof Libro)) {
      throw new Error("Ambos parametros deben ser intancias de la clase libro");
    }
    if (libroA.numeroPaginas > libroB.numeroPaginas) {
      return `"${libroA.titulo}" tiene más páginas (${libroA.numeroPaginas})`;
    } else if (libroB.numeroPaginas > libroA.numeroPaginas) {
      return `"${libroB.titulo}" tiene más páginas (${libroB.numeroPaginas})`;
    } else {
      return "Ambos libros tienen la misma cantidad de páginas";
    }
  }
}

const libro1 = new Libro(
  "978-3-16-148410-0",
  "Cien años de soledad",
  "García Márquez",
  432
);
console.log(libro1);
// voy a sacar los _ por que al acceder a la propiedad privada por lo que esta asignando directamente el valor a la propiedad, por lo que las validaciones no se ejecutan.
libro1.titulo = "El amor en los tiempos de colera";
//console.log(libro1);
libro1.ISBN = 3505;
//console.log(libro1);
libro1.numeroPaginas = 600;
//console.log(libro1);
console.log(libro1.toString());

const libro2 = new Libro();
libro2.titulo = "Cien años de soledad";
//console.log(libro1);
libro2.ISBN = 599853532636;
//console.log(libro1);
libro2.autor = " Fernando Pessoa";
libro2.numeroPaginas = 470;
//console.log(libro1);
console.log(libro2.toString());

//Crear al menos 2 objetos libros y utilizar el método mostrarLibro(); - no usare el metodo mostrarLibro() por que use toString() para probarlo.

console.log(Libro.compararPaginas(libro1,libro2));


// Para repasar del codigo 1 usamos static , ademas usamos instanceof y valicaciones con los setters la mas nueva .test
// Podria ahora hacer el codigo pero que reciba datos por prompt y que los valide con los setters