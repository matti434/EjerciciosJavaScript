/*
Buscador simple: Filtrar en un array de strings los elementos que contengan cierta palabra.
*/

// Array de ejemplo con strings
const datos = [
  "JavaScript es un lenguaje de programación",
  "Python es muy popular para ciencia de datos",
  "HTML y CSS son para desarrollo web",
  "Java es un lenguaje orientado a objetos",
  "Los frameworks de JavaScript son muy útiles",
  "Base de datos SQL y NoSQL",
  "Desarrollo frontend con React y Vue",
  "Desarrollo backend con Node.js y Python",
  "Programación funcional en JavaScript",
  "Machine learning con Python",
];

function buscarPalabra() {}

function iniciarBuscador() {
  // Devuelve un valor booleano que indica si una variable es una matriz - IsArray devuelve True si la variable es un array; de lo contrario, devuelve False
  if (!Array.isArray(datos)) {
    console.log(
      "Error: el array `datos` no esta definido como un array o no es un array. "
    );
    alert("Contacte con el administrador");
    return;
  }

  // verifica que el array no tenga todos vacios
  if (datos.length === 0) {
    //console. error : imprime el texto en la consola como un mensaje de error. console. warn : imprime el texto en la consola como una advertencia.
    console.warn("El array esta vacio");
    alert("No hay datos disponibles para buscar.El array esta vacio");
    return;
  }

  //Mostrar informacion del array
  console.log("Datos disponibles: " + datos.length + " elementos");
  console.log("Preview del contenido: \n");

  datos.slice(0, 5).forEach((item, index) => {
    console.log(
      ` ${index + 1}. ${item.substring(0, 40)} ${item.length > 40 ? "..." : ""}`
    );
  });

  if (datos.length > 5) {
    console.log(` ... y ${datos.length - 5} más`);
  }

  //solicitar palabra al usuario con reintentos
  let busquedaActiva = true;

  while (busquedaActiva) {
    console.log("\n" + "=".repeat(50));
    console.log("Realizando busqueda..");
    console.log("=".repeat(50));

    const inputUsuario = prompt(
      "Ingrese la palabra a buscar dentro del array:"
    );

    if (iniciarBuscador === null) {
      const confirmarSalida = confirm(
        "¿Estás seguro de que quieres salir del buscador?"
      );
      if (confirmarSalida) {
        console.log("Saliendo del programa");
        busquedaActiva = false;
        continue;
      }
    }

    if (inputUsuario.trim() === "") {
      console.log("No puede ingresar espacios vacios");

      const palabrasUnicas = obtenerPalabrasUnicas();
      //join()` en JavaScript **convierte un array en una sola cadena de texto**, separando los elementos con lo que vos le indiques
      console.log(
        " Palabra disponibles: " +
          palabrasUnicas.slice(0, 10).join(", ") +
          "..."
      );

      continue;
    }

    // ya validamos que inputUsuario es valido ahora pasamosa validar si el tamaño es correcto
    const inputUsuarioLimpio = inputUsuario.trim();

    if (inputUsuarioLimpio.length < 2) {
      console.warn("La palabra debe tener al menos 2 caracteres");
      continue;
    }
    if (inputUsuarioLimpio.length > 50) {
      console.warn(
        "La palabra es demasiado grande, no puede tener mas de 50 caracteres"
      );
      continue;
    }

    const palabraValida = inputUsuario.trim();
    console.log(`Buscando: ${palabraValida}`);

    try {
      // Código que podría fallar
      const resultados = buscarPalabra(datos, palabraValida);

      console.log("\n" + "=".repeat(60));
      console.log("📋 RESULTADOS DE BÚSQUEDA");
      console.log("=".repeat(60));

      if (resultados.length === 0) {
        console.log("No se encontraron resultados para: " + palabraValida);

        //mostrar palabras disponibles
        console.log("\n📚 Palabras disponibles en el sistema:");
        const palabrasDisponibles = obtenerPalabrasUnicas();
        console.log(
          "  " +
            palabrasDisponibles.slice(0, 15).join(", ") +
            (palabrasDisponibles.length > 15 ? "..." : "")
        );
      } else {
        console.log("Palabra entonctrada " + resultados.length);

        // Iterar sobre cada resultado encontrado
        // resultado = el texto completo donde se encontró la coincidencia
        // index = la posición en el array (0, 1, 2, ...)
        resultados.forEach((resultado, index) => {
          // Crear una expresión regular dinámica con la palabra buscada
          // new RegExp() crea un objeto de expresión regular
          // palabraValida = lo que el usuario buscó (ej: "java")
          // 'gi' = flags que modifican el comportamiento:
          //   g = global → busca TODAS las coincidencias, no solo la primera
          //   i = insensitive → ignora mayúsculas/minúsculas
          const expresionRegular = new RegExp(palabraValida, "gi");

          // Reemplazar todas las coincidencias en el texto
          // resultado.replace() busca y reemplaza texto
          // Primer parámetro: qué buscar (nuestra expresión regular)
          // Segundo parámetro: función que se ejecuta por cada coincidencia
          const textoResaltado = resultado.replace(
            expresionRegular,

            // Esta función se llama por cada coincidencia encontrada
            // match = el texto que coincidió (ej: "Java", "JAVA", "java")
            (match) => {
              // Devolver la misma palabra pero rodeada de **
              return `**${match}**`;
            }
          );

          // Mostrar el resultado formateado en la consola
          // ${index + 1} → número del resultado (1, 2, 3...)
          // ${textoResaltado} → el texto con las palabras resaltadas
          console.log(`${index + 1}. ${textoResaltado}`);
        });
      }
    } catch (error) {
      // Manejo del error
      console.error("Error inesperado durante la busqueda:", error);
      alert("Error.Por favor, intenta nuevamente");
    }

    console.log("\n" + "=".repeat(60));
    const otraBusqueda = confirm(
      "¿Deseas realizar otra búsqueda?\n\nAceptar = Nueva búsqueda\nCancelar = Salir"
    );

    if (!otraBusqueda) {
      console.log("¡Hasta pronto!");
      busquedaActiva = false;
    }
  }
}

function obtenerPalabrasUnicas(){
    const totalPalabrasUnicas = [];

    datos.forEach(frase => {
        // Split se usa para dividir una cadena delimitada en subcadenas
        //. Si no se especifica ningún carácter delimitador, la cadena se divide en caracteres de espacio en blanco
        const palabras = frase.toLowerCase().split(/\s+/);
        palabras.forEach(palabras => {
            // Limpiar palabra de signos de puntuación
            const palabraLimpia = palabra.replace(/[.,!?;:()\[\]{}'"-]/g, '');
            if (palabraLimpia.length > 2) { // Solo palabras de 3+ caracteres
                todasLasPalabras.push(palabraLimpia);
            }
        })
    })
}

iniciarBuscador();
