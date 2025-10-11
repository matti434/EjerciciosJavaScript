/*
1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir,
 si la edad ingresada no es un número válido indicarlo en un mensaje.
*/

do {
  let edad = parseInt(prompt("Ingrese la edad:"));

  if (isNaN(edad)) {
    alert("La edad ingresada no es un número válido");
  } else if (edad < 18) {
    alert(`Todavia no puede conducir`);
  } else {
    alert(`Ya puede conducir`);
    break;
  }
} while (true);
