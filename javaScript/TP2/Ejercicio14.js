/*

14- Realiza un script que pida una cadena de texto y lo muestre poniendo el signo 
  –
 entre cada carácter sin usar el método replace. Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.

*/

let texto;
while ((texto = prompt("Ingresa un texto (Cancelar para salir):")) !== null) {
  if (texto === "") {
    console.log("No ingresaste nada.");
    continue; // Vuelve a pedir texto si está vacío
  }

  let resultado = "";
  for (let i = 0; i < texto.length; i++) {
    resultado += texto.charAt(i); // Método charAt() para obtener cada carácter
    if (i < texto.length - 1) {
      // Si no es el último carácter, añade "-"
      resultado += "-";
    }
  }
  console.log(resultado);
}
console.log("Programa terminado.");
