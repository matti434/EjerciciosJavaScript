/*
5- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.

"imagen"

esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
generaDNI(): genera un número aleatorio de 8 cifras.

*/

const generaciones = [
    { nombre: "Generazion Z", desde: 1994, hasta: 2010, rasgo: "Irreverencia" },
    { nombre: "Milenials", desde: 1981, hasta: 1993, rasgo: "Frustracion" },
    { nombre: "Generazion X", desde: 1969, hasta: 1980, rasgo: "obsesion por el exito" },
    { nombre: "Baby Boom", desde: 1949, hasta: 1968, rasgo: "ambision" },
    { nombre: "Silent Generation", desde: 1930, hasta: 1948, rasgo: "austeridad" },
]

class Persona {
    // primero crear sus propiedades-listo
    constructor(nombre, dni, sexo, peso, altura, anio) {
        this.nombre = nombre;
        this.dni = dni;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        this.anio = anio;
    }

    // vemos que generacion es y devolvemos el rasgo caracteristico 
    mostrarGeneracion() {
        console.log(this.anio);
        const partes = this.anio.split("/"); // busca los caracteres "/" para hacer los cortes y divide en esos puntos. Ej: 26/10/2000 ==> "26","10","2000"
        this.anioNacimiento = parseInt(partes[2]);// el año esta en la tercera posicion

        if (this.anioNacimiento >= 1994 && this.anioNacimiento <= 2010) {
            const mensaje = (`La persona ${this.nombre},pertenece a la generacion ${generaciones[0].nombre} y su rasgo es ${generaciones[0].rasgo}.`);
            if (this.anioNacimiento >= 2007) {
                return mensaje + " Es menor de edad";
            }
            else {
                return mensaje + " Es mayor de edad";
            }
        }
        if (this.anioNacimiento >= 1981 && this.anioNacimiento <= 1993) {
            const mensaje = (`La persona ${this.nombre},pertenece a la generacion ${generaciones[1].nombre} y su rasgo es ${generaciones[1].rasgo}.`);
            return mensaje + " Es mayor de edad";
        }
        if (this.anioNacimiento >= 1969 && this.anioNacimiento <= 1980) {
            const mensaje = (`La persona ${this.nombre},pertenece a la generacion ${generaciones[2].nombre} y su rasgo es ${generaciones[2].rasgo}.`);
            return mensaje + " Es mayor de edad";
        }
        if (this.anioNacimiento >= 1949 && this.anioNacimiento <= 1968) {
            const mensaje = (`La persona ${this.nombre},pertenece a la generacion ${generaciones[3].nombre} y su rasgo es ${generaciones[3].rasgo}.`);
            return mensaje + " Es mayor de edad";
        }
        if (this.anioNacimiento >= 1930 && this.anioNacimiento <= 1948) {
            const mensaje = (`La persona ${this.nombre},pertenece a la generacion ${generaciones[4].nombre} y su rasgo es ${generaciones[4].rasgo}.`);
            return mensaje + " Es mayor de edad";
        }
        else {
            console.log("La edad no corresponde a una generacion")
            if (this.anioNacimiento >= 2007) {
                console.log("-----------------");
                console.log(" Es menor de edad");
            }
            else {
                console.log("-----------------");
                console.log(" Es mayor de edad");
            }
        }

    }

    mostrarInformacion(){
        return (`${this.nombre} con dni: ${this.dni} sexo: ${ this.sexo} peso:  ${this.peso} altura: ${this.altura} fecha de nacimiento: ${this.anioNacimiento} <br> ${this.mostrarGeneracion()} `);
    }

}
const Flor = new Persona("Flor", 42936906, "F", 60, 1.49, "26/10/1932");
Flor.mostrarGeneracion();
console.log(Flor.mostrarGeneracion());
console.log(Flor.mostrarInformacion());