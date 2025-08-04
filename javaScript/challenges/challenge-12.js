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
  let edad = parseInt(document.getElementById(`edad2`).value);
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
  let numero1 = parseFloat(document.getElementById(`numero5`).value);
  let numero2 = parseFloat(document.getElementById(`numero4`).value);
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
    respuesta.textContent = `El monto es ${monto}, aplica 10% de total descuento de: ${total.toFixed(
      2
    )}`;
  } else {
    respuesta.textContent = `El monto es ${monto}, no aplica descuento.`;
  }
}

function verificarAcceso() {
  const usuarioGuardado = "Matias123Laz";
  const contraseñaGuardada = "RollingCode1234";
  const usuario = document.getElementById("nombreUsuario").value;
  const contraseña = document.getElementById("contraseña2").value;
  let respuesta = document.getElementById("res10");

  console.log("Usuario ingresado:", usuario);
  console.log("Contraseña ingresada:", contraseña);
  console.log(
    "Comparación:",
    usuario === usuarioGuardado,
    contraseña === contraseñaGuardada
  );

  if (usuario === usuarioGuardado && contraseña === contraseñaGuardada) {
    respuesta.textContent = "Acceso concedido: Usuario y contraseña coinciden";
  } else {
    respuesta.textContent = "Acceso denegado: Usuario o contraseña incorrectos";
  }
}

function calcularEdad() {
  let edad = parseFloat(document.getElementById("edades").value);
  let respuesta = document.getElementById("res11");

  if (edad >= 0 && edad <= 1) {
    respuesta.textContent = `La edad es ${edad} por lo que es un bebe`;
  } else if (edad > 1 && edad <= 11) {
    respuesta.textContent = `La edad es ${edad} por lo que es un niño`;
  } else if (edad > 11 && edad <= 18) {
    respuesta.textContent = `La edad es ${edad} por lo que es un adolecente`;
  } else if (edad > 18 && edad <= 65) {
    respuesta.textContent = `La edad es ${edad} por lo que es un adulto`;
  } else if (edad > 65) {
    respuesta.textContent = `La edad es ${edad} por lo que es un adulto mayor`;
  }
}

function validarFecha() {
  const dia = parseInt(document.getElementById("dia").value);
  const mes = parseInt(document.getElementById("mes").value);
  const anio = parseInt(document.getElementById("anio2").value);
  const respuesta = document.getElementById("res12");

  if (mes < 1 || mes > 12) {
    respuesta.textContent = "Mes inválido (debe ser 1-12)";
    return;
  }

  let maxDias = 31;
  if (mes === 2) {
    const esBisiesto = (anio % 4 === 0 && anio % 100 !== 0) || anio % 400 === 0;
    maxDias = esBisiesto ? 29 : 28;
  } else if (mes === 4 || mes === 6 || mes === 9 || mes === 11) {
    maxDias = 30;
  }

  if (dia < 1 || dia > maxDias) {
    respuesta.textContent = `Día inválido para ${mes}/${anio} (máx ${maxDias} días)`;
    return;
  }

  respuesta.textContent = `Fecha válida: ${dia}/${mes}/${anio}`;
}

function verificarRol() {
  let usuario = document.getElementById("usuario2").value;
  let rol = document.getElementById("rol").value;
  let resultado = document.getElementById("res13");

  if (rol === "admin") {
    resultado.textContent = "Usted es admin por lo que tiene acceso total";
  } else if (rol === "editor") {
    resultado.textContent = "Usted es editor por lo que tiene acceso limitado";
  } else if (rol === "invitado") {
    resultado.textContent = "Usted es invitado por lo que solo puede observar";
  } else {
    resultado.textContent =
      "Usted no tiene un rol por lo que no tiene acceso de ningun tipo";
  }
}

function verificarRol() {
  let sueldo = document.getElementById("ingresos").value;
  let resultado = document.getElementById("res14");
  let impuesto = 0;
  let total = 0;
  if (sueldo > 5000) {
    impuesto = sueldo * 0.1;
    total = sueldo - impuesto;
    resultado.textContent = `Sus ingresos son superiores a 5000 por lo que sus impuestos son del 10% su salario es ${sueldo} sacando los impuestos el total es : ${total}`;
  } else if (sueldo > 1000 && sueldo <= 5000) {
    impuesto = sueldo * 0.05;
    total = sueldo - impuesto;
    resultado.textContent = `Sus ingresos son medios por lo que sus impuestos son del 5% su salario es ${sueldo} sacando los impuestos el total es : ${total}`;
  } else if ((sueldo = 1000)) {
    impuesto = sueldo * 0.02;
    total = sueldo - impuesto;
    resultado.textContent = `Sus ingresos son bajos por lo que sus impuestos son del 2% su salario es ${sueldo} sacando los impuestos el total es : ${total}`;
  } else {
    resultado.textContent =
      "Su sueldo es bajo por lo que no debe pagar impuestos";
  }
}

function convertirTemperatura() {
  // Obtener valores
  const temperatura = parseFloat(document.getElementById("temperatura").value);
  const escala = document.getElementById("escala").value;
  const resultado = document.getElementById("res15");
  const diagnostico = document.getElementById("diagnostico");
  let tempC, tempF, conversionText;

  if (escala === "celsius") {
    tempC = temperatura;
    tempF = (tempC * 9) / 5 + 32;
    conversionText = `${tempC.toFixed(1)}°C = ${tempF.toFixed(1)}°F`;
  } else {
    tempF = temperatura;
    tempC = ((tempF - 32) * 5) / 9;
    conversionText = `${tempF.toFixed(1)}°F = ${tempC.toFixed(1)}°C`;
  }

  resultado.textContent = conversionText;

  if (tempC < 35) {
    diagnostico.textContent = "Hipotertermia: Temperatura peligrosamente baja";
  } else if (tempC >= 35 && tempC <= 37.2) {
    diagnostico.textContent = "Normal: Temperatura corporal normal";
  } else if (tempC > 37.2 && tempC <= 38) {
    diagnostico.textContent = "Febrícula: Temperatura ligeramente elevada";
  } else if (tempC > 38 && tempC <= 39) {
    diagnostico.textContent = "Fiebre: Temperatura alta";
  } else {
    diagnostico.textContent = "Fiebre muy alta busque atención ";
  }
}

let numeroAleatorio = Math.floor(Math.random() * 10) + 1;

function verificarNumero() {
  const numeroIngresado = parseInt(
    document.getElementById("numeroUsuario").value
  );
  const resultado = document.getElementById("res16");
  const contador = document.getElementById("intentos");

  if (numeroIngresado === numeroAleatorio) {
    resultado.textContent = `¡Correcto! El número era ${numeroAleatorio}`;
  } else if (numeroIngresado < numeroAleatorio) {
    resultado.textContent = "El número es mayor";
  } else {
    resultado.textContent = "El número es menor";
  }
}

function validarContraseña(contraseña3) {
  let validacion =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;

  return validacion.test(contraseña3);
}
function verificarContraseña() {
  const inputContraseña = document.getElementById("contraseña").value;
  const resultado = document.getElementById("res17");

  if (validarContraseña(inputContraseña)) {
    resultado.textContent = " La contraseña cumple con todos los requisitos";
  } else {
    resultado.textContent =
      "La contraseña debe tener: 8+ caracteres, mayúsculas, números y símbolos";
  }
}

function calcularTarifa() {
  const distancia = parseFloat(document.getElementById("distancia").value);
  const resultado = document.getElementById("res18");
  let tarifa = 0;
  let detalle = "";

  if (distancia <= 5) {
    tarifa = 5.0;
    detalle = "Tarifa base (0-5 km)";
  } else if (distancia <= 15) {
    tarifa = 10.0;
    detalle = "Tramo 5.1-15 km";
  } else if (distancia <= 30) {
    tarifa = 15.0;
    detalle = "Tramo 15.1-30 km";
  } else {
    const kmAdicionales = distancia - 30;
    tarifa = 20.0 + kmAdicionales * 1.0;
    detalle = `Base 30 km + ${kmAdicionales.toFixed(1)} km adicionales`;
  }

  // Mostrar resultado
  resultado.innerHTML = `<strong>Distancia:</strong> ${distancia.toFixed(
    1
  )} km<br>
        <strong>Tarifa:</strong> $${tarifa.toFixed(2)}<br>
        <small class="text-muted">${detalle}</small>`;
}

function verificarPelicula() {
  const edad = parseInt(document.getElementById("edad").value);
  const clasificacion = document.getElementById("clasificacion").value;
  const resultado = document.getElementById("res19");
  let puedeEntrar = false;
  let mensaje = "";

  switch (clasificacion) {
    case "A":
      puedeEntrar = true;
      mensaje = "Puede ver la película: Apto para todo público";
      break;
    case "B":
      puedeEntrar = edad >= 12;
      mensaje = puedeEntrar
        ? " Puede ver la película (+12 años)"
        : "Requiere tener al menos 12 años";
      break;
    case "B15":
      puedeEntrar = edad >= 15;
      mensaje = puedeEntrar
        ? " Puede ver la película (+15 años)"
        : "Requiere tener al menos 15 años";
      break;
    case "C":
      puedeEntrar = edad >= 18;
      mensaje = puedeEntrar
        ? " Puede ver la película (+18 años)"
        : "Requiere tener al menos 18 años";
      break;
    case "D":
      puedeEntrar = edad >= 21;
      mensaje = puedeEntrar
        ? "Puede ver la película (Contenido adulto)"
        : "Requiere tener al menos 21 años y identificación";
      break;
  }
  resultado.textContent = mensaje;
}

function simularSemaforo() {
  let color = document.getElementById("color").value.toLowerCase();
  let respuesta = document.getElementById("res20");

  if (color === "rojo") {
    respuesta.textContent = "Detente, el semáforo está en rojo.";
  } else if (color === "amarillo") {
    respuesta.textContent = "Precaución, el semáforo está en amarillo.";
  } else if (color === "verde") {
    respuesta.textContent = " Puedes avanzar, el semáforo está en verde.";
  } else {
    respuesta.textContent =
      "Color inválido. Escribe 'rojo', 'amarillo' o 'verde'.";
  }
}

/*


Aqui empiezan los ejercicios de bucles
  

 */

function contar() {
  let respuesta = document.getElementById("resBucle1");
  let contador2 = 0;
  for (let i = 0; i < 10; i++) {
    // setTimeout se programa con un retraso (i*tiempo)
    setTimeout(() => {
      contador2++;
      respuesta.textContent = `-${contador2}-`;
      console.log(contador2);
    }, i * 500);
  }
}

function sumar50() {
  let respuesta = document.getElementById("resBucle2");
  let suma=0
  for (let i = 0; i < 50; i++) {
      suma = suma+i;
  }
  respuesta.textContent=`El resultado de la suma de los primeros 50 numeros naturales es: ${suma}`;
}


function tablaDeMultiplicar() {
  let numero = parseInt(document.getElementById("numeroTablaMultiplicar").value);
  let respuesta = document.getElementById("resBucle3");
  let multiplicar;
  let tablaCompleta = "";
  for (let i = 0; i <= 10; i++) {
      multiplicar = numero*i;
      console.log(`${numero} x ${i} = ${multiplicar}`);
      tablaCompleta += `--${numero} x ${i} = ${multiplicar}\n--  `;
    }
    respuesta.textContent=tablaCompleta;
}


function mostrarPares() {
  let respuesta = document.getElementById("resBucle4");
  let resultado = "Los números pares son: ";
  
  for (let i = 0; i <= 100; i += 2) {
    resultado += i + (i < 100 ? " -- " : "");
  }
  
  console.log(resultado);
  respuesta.textContent = resultado;
}


function cuentaRegresiva() {
  let respuesta = document.getElementById("resBucle5");
  
  for (let i = 10; i >= 0; i--) {
    // setTimeout se programa con un retraso (i*tiempo)
    setTimeout(() => {
      respuesta.textContent = i === 0 ? "¡Despegue!" : `-${i}-`;
      console.log(i === 0 ? "¡Despegue!" : i );
    }, (10-i) * 500);
  }
}


// let numeroAleatorio = Math.floor(Math.random() * 10) + 1;
let numeroAleatorioBucles = Math.floor(Math.random() * 10) + 1;

function adivinarNumero() {
  const input = document.getElementById("numeroBucleAleatorio");
  const resultado = document.getElementById("resBucle6");
  let numeroIngresado = parseInt(input.value);
  
  if (isNaN(numeroIngresado)) {
    resultado.textContent = "Ingresa un número válido";
    return;
  }

  do {
    if (numeroIngresado === numeroAleatorioBucles) {
      resultado.textContent = `¡Correcto! El número era ${numeroAleatorioBucles}`;
      return true;
    } else if (numeroIngresado < numeroAleatorioBucles) {
      resultado.textContent = "El número es mayor";
    } else {
      resultado.textContent = "El número es menor";
    }
    
    return false;
  } while (true);
}