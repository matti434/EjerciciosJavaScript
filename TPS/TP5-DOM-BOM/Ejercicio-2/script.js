/*2- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:
*imagen*
esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
Luego crea la interfaz necesaria para que el usuario pueda crear un objeto persona,
 permitiendo ingresar las propiedades mediante un formulario, también agregar los botones “mostrar generación”, 
 es “mayor de edad” e indicar en un alert el resultado de la función correspondiente.
*/

const generaciones = [
  { nombre: "Generación Z", desde: 1994, hasta: 2010, rasgo: "Irreverencia" },
  { nombre: "Milenials", desde: 1981, hasta: 1993, rasgo: "Frustración" },
  { nombre: "Generación X", desde: 1969, hasta: 1980, rasgo: "Obsesión por el éxito" },
  { nombre: "Baby Boom", desde: 1949, hasta: 1968, rasgo: "Ambición" },
  { nombre: "Silent Generation", desde: 1930, hasta: 1948, rasgo: "Austeridad" },
];

class Persona {
  constructor(nombre, dni, sexo, peso, altura, anio) {
    this.nombre = nombre;
    this.dni = dni;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.anio = parseInt(anio); // Convertir a número directamente
  }

  mostrarGeneracion() {
    const generacion = generaciones.find(gen => 
      this.anio >= gen.desde && this.anio <= gen.hasta
    );

    if (generacion) {
      const mayorEdad = this.esMayorDeEdad();
      const mensajeEdad = mayorEdad ? "Es mayor de edad" : "Es menor de edad";
      return `Pertenece a la generación ${generacion.nombre}, su rasgo característico es: ${generacion.rasgo}. ${mensajeEdad}`;
    } else {
      const mayorEdad = this.esMayorDeEdad();
      const mensajeEdad = mayorEdad ? "Es mayor de edad" : "Es menor de edad";
      return `No pertenece a ninguna generación definida. ${mensajeEdad}`;
    }
  }

  esMayorDeEdad() {
    const edad = new Date().getFullYear() - this.anio;
    return edad >= 18;
  }

  calcularIMC() {
    const alturaMetros = this.altura / 100;
    return (this.peso / (alturaMetros * alturaMetros)).toFixed(2);
  }

  mostrarInformacion() {
    const imc = this.calcularIMC();
    const generacionInfo = this.mostrarGeneracion();
    
    return `
      <strong>Información de la Persona:</strong><br>
      • Nombre: ${this.nombre}<br>
      • DNI: ${this.dni}<br>
      • Sexo: ${this.sexo}<br>
      • Peso: ${this.peso} kg<br>
      • Altura: ${this.altura} cm<br>
      • Año de nacimiento: ${this.anio}<br>
      • IMC: ${imc}<br>
      • ${generacionInfo}
    `;
  }
}