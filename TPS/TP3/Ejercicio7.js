/*
7- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla,
 la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.
*/

function tablaMultiplicar(numero) {
  let tabla = "";

  if (isNaN(numero)) {
    return "ingrese un valor valido";
  }

  for (let i = 1; i <= 10; i++) {
    multiplicacion = i * numero;
    tabla += `${i} × ${numero} = ${multiplicacion}\n`;
  }
  return tabla;
}

do {
  let numero = parseInt(prompt("Ingrese un número entero:"));
  let resultado = tablaMultiplicar(numero);
  document.writeln(` ${resultado} <br>`);
} while (confirm("¿Desea generar otra tabla de multiplicar?"));
