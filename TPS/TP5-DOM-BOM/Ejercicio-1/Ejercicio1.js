/*1- Crea una web con bootstrap y js, que contenga un botón comenzar el juego, en ese momento se crea un número aleatorio que el usuario deberá adivinar, 
la interfaz del usuario debe tener además un input para ingresar un número y un botón enviar, al presionar el botón enviar mostrar en un alert si el usuario adivino o no el número mágico, 
si no lo adivino indicarle con un alert si el numero que ingreso es mayor o menor al número mágico.
Cuando el usuario adivine el numero mostrar un mensaje indicando al usuario que adivino el numero.
*/

const button = document.getElementById("button-init");
const random = Math.floor(Math.random() * 10) + 1;

button.addEventListener("click", () => {
  try {
    const input = document.getElementById("input-text").value;
    const valueInput = parseInt(input);
    if (valueInput === random) {
      alert("Felicidades acerto el numero aleatorio" + random);
    } else {
      alert("No le acertaste aun" + random);
    }
  } catch (error) {
    alert("Error al generar numero:", error);
  }
});
