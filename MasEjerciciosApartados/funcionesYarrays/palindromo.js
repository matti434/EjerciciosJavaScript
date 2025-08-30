/*
Palíndromo: Función que reciba una palabra y diga si se lee igual al derecho y al revés.
*/

function palindromo() {
  let texto = "";
  do {
    texto = prompt("ingrese el texto");

    if (texto === null) {
      alert("Saliendo del programa");
      return null;
    }

    texto = texto.trim();

    if (texto === "") {
      console.log("No ingrese valores vacios");
      continue;
    }

    //Limpiamos el texto: minusculas y sin espacios/puntuación
    const textoLimpio = texto.toLowerCase().replace(/[^a-záéíóúüñ]/g, "");

    if (textoLimpio.length < 2) {
      alert("El texto debe tener al menos 2 letras");
      return;
    }
    //Convertir a array, revertir y unir
    const textoReverso = textoLimpio.split("").reverse().join("");

    const esPalindromo = textoLimpio === textoReverso;

    alert(`"${texto}" ${esPalindromo ? "SÍ" : "NO"} es un palíndromo`);

    let continuar = confirm("¿Desea verificar otra palabra?");
    if (!continuar) {
        break; // sale del bucle
    }
  } while (true);
}

palindromo();
