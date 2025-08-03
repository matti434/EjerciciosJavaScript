function esPositivoNegativoCero() {
  let numero1 = parseInt(document.getElementById(`num1`).value);
  let resultado = document.getElementById(`res1`);
  if (numero1 > 0) {
    resultado.textContent = `El numero ${numero1} es positivo`;
  } else if (numero1 == 0) {
    resultado.textContent = `El numero es cero`;
  } else if (numero1 < 0) {
    resultado.textContent = `El numero es menor a cero`;
  }
}
function edadMayorMenor() {
  let edad = parseInt(document.getElementById(`edad`).value);
  let resultado = document.getElementById(`res2`);

  if (edad == 16) {
    resultado.textContent = `Su edad es de ${edad} por lo que si puede votar pero no es obligatorio`;
    return;
  } else if (edad >= 18) {
    resultado.textContent = `Su edad es de ${edad} puede votar y es obligatorio`;
    return;
  } else if (edad < 16) {
    resultado.textContent = `Su edad es de ${edad} por lo que no puede votar`;
    return;
  }
}

function verificarParImpar() {
  // Obtener elementos del DOM
  let inputNumero = document.getElementById("numeroParImpar");
  let resultado = document.getElementById("res3");

  // Obtener y validar el valor
  const numero = parseInt(inputNumero.value);

  if (isNaN(numero)) {
    resultado.textContent = "Por favor ingresa un número válido";
    return;
  }
  // Determinar si es par o impar
  if (numero % 2 === 0) {
    resultado.textContent = ` El número ${numero} es PAR`;
  } else {
    resultado.textContent = ` El número ${numero} es IMPAR`;
  }
}

function compararConstraseña() {
  let contraseña = document.getElementById(`contraseña`).value;
  let contraseñaRepetida = document.getElementById(`contraseñaRepetida`).value;
  let mensaje = document.getElementById(`res4`);

  if (contraseña === "" || contraseñaRepetida === "") {
    mensaje.textContent = `Por favor ingrese las contraseñas`;
    return;
  } else if (contraseña === contraseñaRepetida) {
    mensaje.textContent = `Las contraseñas si coinciden`;
    return;
  } else {
    mensaje.textContent = `Las contraseñas no coinciden`;
    return;
  }
}

function calcularMayor() {
  let numero1 = parseFloat(document.getElementById(`numero1`).value);
  let numero2 = parseFloat(document.getElementById(`numero2`).value);
  let numero3 = parseFloat(document.getElementById(`numero3`).value);
  let respuesta = document.getElementById("res5");
  /*
  if (numero1 > numero2 && numero1 > numero3) {
    respuesta.textContent = `El numero ${numero1} es el mayor`;
    return;
  } else if (numero2 > numero1 && numero2 > numero3) {
    respuesta.textContent = `El numero ${numero2} es el mayor`;
    return;
  } else if (numero3 > numero1 && numero3 > numero2) {
    respuesta.textContent = `El numero ${numero3} es el mayor`;
    return;
  }
*/
  //Otra forma de hacerlo es con

  let mayor = Math.max(numero1, numero2, numero3);
  respuesta.textContent = `El numero ${mayor} es el mayor`;
}

function calcularOperacion() {
  let opcion = document.getElementById("operacion").value;
  let numero1 = parseFloat(document.getElementById("numero1").value);
  let numero2 = parseFloat(document.getElementById("numero2").value);
  let resultado = document.getElementById("res6");

  // Validar si los campos están vacíos
  if (numero1 === "" || numero2 === "") {
    resultado.textContent = " Por favor completa ambos campos numéricos.";
    return;
  }

  // Convertir opción a número
  let operacion = Number(opcion);

  if (operacion === 1) {
    total = numero1 + numero2;
    resultado.textContent = ` El resultado de la suma es: ${total}`;
  } else if (operacion === 2) {
    total = numero1 - numero2;
    resultado.textContent = ` El resultado de la resta es: ${total}`;
  } else if (operacion === 3) {
    total = numero1 * numero2;
    resultado.textContent = ` El resultado de la multiplicación es: ${total}`;
  } else if (operacion === 4) {
    if (numero2 === 0) {
      resultado.textContent = " No se puede dividir entre cero.";
    } else {
      total = numero1 / numero2;
      resultado.textContent = ` El resultado de la división es: ${total}`;
    }
  }
}

function calcularAnioBisiesto() {
  let anio = parseInt(document.getElementById("anio").value);
  let respuesta = document.getElementById("res7");

  if (anio % 4 === 0 && anio % 100 != 0) {
    respuesta.textContent = `El año: ${anio} es bisiesto`;
  } else if (anio % 100 == 0 && anio % 400 == 0) {
    respuesta.textContent = `El año: ${anio} es bisiesto`;
  } else {
    respuesta.textContent = `El año: ${anio} no es bisiesto`;
  }
}

function calificacion() {
  let nota = parseInt(document.getElementById("nota").value);
  let respuesta = document.getElementById("res8");

  if (nota >= 6 && nota <= 7) {
    respuesta.textContent = `La nota es: ${nota} esta aprobado`;
  } else if (nota >= 8 && nota <= 10) {
    respuesta.textContent = `La nota es: ${nota} una calificacion excelente`;
  } else if (nota <= 5 && nota >= 0) {
    respuesta.textContent = `La nota es: ${nota} esta desaprobado`;
  } else {
    respuesta.textContent = "El valor ingresado es incorrecto";
  }
}

function descuento() {
  let monto = parseFloat(document.getElementById("monto").value);
  let respuesta = document.getElementById("res9");

  if (monto > 100) {
    total = monto * 0.1; // Cálculo del 10%
    respuesta.textContent = `El monto es $${monto}, aplica 10% de total descuento de: $${total.toFixed(
      2
    )}`;
  } else {
    respuesta.textContent = `El monto es $${monto}, no aplica descuento.`;
  }
}
