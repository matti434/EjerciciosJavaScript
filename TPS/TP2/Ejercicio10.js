/*
10- Realiza un script que pida número de filas y columnas y escriba una tabla.
 Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.
*/

let fila = parseInt(prompt("Ingrese la fila:"));
let columna = parseInt(prompt("Ingrese la columna"));
let total = fila * columna;

if (isNaN(fila) || isNaN(columna) || fila <= 0 || columna <= 0) {
  console.log("ingrese un valor valido");
} else {
  for (let i = 1; i <= fila; i++) {
    for (let j = 1; j <= columna; j++) {
      total--;
      console.log("\n"+ total);
    }
  }
}
