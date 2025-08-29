/*
 Calculadora básica: Funciones `sumar()`, `restar()`, `multiplicar()`, `dividir()` que reciban 2 números y devuelvan el resultado.
*/

do {
  let operacion = prompt(
    "Ingrese la operacion que decea realizar: (sumar-restar-multiplicar-dividir-salir)"
  ).toLowerCase();

  if (
    operacion === null ||
    operacion === undefined ||
    operacion.trim() === ""
  ) {
    alert("Por favor ingrese valores validos");
  }
  let resultado;
  switch (operacion) {
    case "sumar":
      resultado = sumar();
      break;
    case "restar":
      resultado = resta();
      break;
    case "multiplicar":
      resultado = multiplicar();
      break;
  }
} while (true);

/*

Funcion suma

*/

function sumar() {
  let suma = 0;
  let cantidad = 0;
  do {
    // cantidad = parseInt(prompt("Ingrese la cantidad de numeros que decea sumar:"));
    // isNaN(cantidad) - Siempre será false porque cantidad es número
    // cantidad.trim() - ERROR CRASH: los números no tienen .trim()
    inputCantidad = prompt("Ingrese la cantidad de numeros que decea sumar:");

    //si el usuario cancela
    if (inputCantidad === null) {
      alert("Operacion cancelada");
      return null;
    }
    // isNan valida que sea un numero--- trim valida que no este
    if (isNaN(inputCantidad) || inputCantidad.trim() === "") {
      alert("Por favor ingrese valores validos o no deje espacio vacios");
      continue;
    }

    cantidad = parseInt(inputCantidad);

    if (cantidad < 2) {
      alert("Tienen que ser mas de 2 valores");
      continue;
    }

    break;
  } while (true);

  let numerosIngresados = [];

  for (let i = 0; i < cantidad; i++) {
    while (true) {
      let input = prompt("Ingrese el numero: ");

      //Verificar null PRIMERO
      if (input === null) {
        alert("Operación cancelada");
        return null;
      }

      // Luego verificar vacío
      if (input.trim() === "") {
        alert("No puede dejar el campo vacío");
        continue;
      }

      // Finalmente verificar si es número
      if (isNaN(input)) {
        alert("Debe ingresar un número válido");
        continue;
      }

      let numero = parseFloat(input);
      suma += numero;
      numerosIngresados.push(numero);
      break;
    }
  }
  console.log("Numeros sumados:", numerosIngresados);
  console.log("Suma total:", suma);
  return suma;
}

/*

Funcion resta

*/

function resta() {
  do {
    let inputCantidad = prompt(
      "Ingrese la cantidad de numeros que quiere restar"
    );

    if (inputCantidad === null) {
      alert("Operacion cancelada");
      return null;
    }
    if (isNaN(inputCantidad)) {
      alert("Ingrese un valor valido");
      continue;
    }
    if (inputCantidad.trim() === "") {
      alert("No ingrese espacios vacios");
      continue;
    }

    let cantidad = parseInt(inputCantidad);

    if (cantidad < 2) {
      alert("La cantidad de numeros debe ser minimo 2");
      continue;
    }
    break;
  } while (true);

  let numerosRestados = [];
  let resta = 0;

  for (let i = 0; i < cantidad; i++) {
    while (true) {
      let input = prompt("Ingrese el numero: ");

      //Verificar null PRIMERO
      if (input === null) {
        alert("Operación cancelada");
        return null;
      }

      // Luego verificar vacío
      if (input.trim() === "") {
        alert("No puede dejar el campo vacío");
        continue;
      }

      // Finalmente verificar si es número
      if (isNaN(input)) {
        alert("Debe ingresar un número válido");
        continue;
      }

      let numero = parseFloat(input);

      // operador ternario
      resta = i === 0 ? numero : resta - numero;
      numerosRestados.push(numero);
      break;
    }
  }
  console.log("Numeros restados:", numerosRestados);
  console.log("Resta total:", resta);
  return resta;
}

function multiplicar() {
  let multiplicacion = 1;
  let numerosMultiplicados = [];
  let cantidad;

  do {
    let inputCantidad = prompt("¿Cuántos números desea multiplicar?");

    if (inputCantidad === null) {
      alert("Operación cancelada");
      return null;
    }

    if (inputCantidad.trim() === "") {
      alert("No ingrese espacios vacíos");
      continue;
    }

    if (isNaN(inputCantidad)) {
      alert("Ingrese un número válido");
      continue;
    }

    cantidad = parseInt(inputCantidad);

    if (cantidad < 2) {
      alert("Debe ingresar al menos 2 números");
      continue;
    }

    break;
  } while (true);

  for (let i = 0; i < cantidad; i++) {
    let numeroValido = false;
    // agregamos numero valido mientras sea distinto de 0 se seguira el programa
    while (!numeroValido) {
      let input = prompt(`Ingrese el número ${i + 1} de ${cantidad}:`);

      if (input === null) {
        alert("Operación cancelada");
        return null;
      }

      if (input.trim() === "") {
        alert("No puede dejar el campo vacío");
        continue;
      }

      if (isNaN(input)) {
        alert("Debe ingresar un número válido");
        continue;
      }

      let numero = parseFloat(input);
      numerosMultiplicados.push(numero);

      if (numero === 0) {
        // Si ingresa cero, toda la multiplicación será cero
        alert("Al ingresar 0, el resultado final será 0");
        let opcion = confirm(
          "Esta seguro que desea ingresar 0 o decea ingresar otro numero:"
        );
        if (opcion) {
          // cambia de numero -continua el while
          continue;
        } else {
          numeroValido = true;
        }
      } else {
        // numero diferente de cero osea valido
        numeroValido = true;
      }
    }
    numerosMultiplicados.push(numero);
    if (numero === 0) {
      multiplicacion = 0;
    } else if (multiplicacion !== 0) {
      multiplicacion *= numero;
    }
  }
  console.log("Números multiplicados:", numerosMultiplicados);
  console.log("Resultado de la multiplicación:", multiplicacion);
  alert(`El resultado de multiplicar ${numerosMultiplicados.join(" x ")} es: ${multiplicacion}`);
  return multiplicacion;
}
