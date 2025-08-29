/*
Promedio de notas: Recibir un array con notas y devolver el promedio usando `.reduce()`.
*/

function promedioNotas() {
  let arrayNotas = [];

  do {
    let input = prompt("Ingrese una nota (0-10):");

    if (input === null) {
      alert("Saliendo del programa");
      return null;
    }

    if (input.trim() === "") {
      alert("No ingrese espacios vacíos");
      continue;
    }

    if (isNaN(input)) {
      alert("Ingrese valores válidos (números)");
      continue;
    }

    let nota = parseFloat(input);

    // Validar rango de nota (0-10)
    if (nota < 0 || nota > 10) {
      alert("La nota debe estar entre 0 y 10");
      continue;
    }

    arrayNotas.push(nota);

    let continuar = confirm("¿Desea agregar otra nota?");
    if (!continuar) {
      break;
    }
  } while (true);


  const sumaNotas = arrayNotas.reduce((acumulador, notaActual) => {
    return acumulador + notaActual;
  }, 0);

  
  const promedio = arrayNotas.length > 0 ? sumaNotas / arrayNotas.length : 0;

  console.log("Notas ingresadas:", arrayNotas);
  console.log("Suma de notas:", sumaNotas);
  console.log("Promedio:", promedio);

  alert(
    `Resultado\n\nNotas: ${arrayNotas.join(", ")}\nPromedio: ${promedio.toFixed(2)}`
  );

  return promedio;
}

// Llamar a la función
promedioNotas();
