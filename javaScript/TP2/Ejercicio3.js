/*
3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp
*/

let cadena = "";
do {
  let respuesta = prompt("Ingrese un a palabra:");

  if (cadena == " ") {
    cadena = respuesta;
  } else {
    cadena += " " + respuesta;
  }
   
  let confirmacion = confirm("Desea ingresar otra palabra?");
  if(!confirmacion){
    break;
  }
 
} while (true);

alert("Texto concatenado:" + cadena);