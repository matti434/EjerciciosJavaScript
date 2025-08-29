// Ejercicio 1: Contar caracteres de un texto
function textos(texto) {
    if (!texto || texto.trim() === "") {
        return "Por favor ingrese un valor válido";
    } else {
        return `El texto tiene ${texto.length} caracteres`;
    }
}

function ejecutarContarCaracteres() {
    let texto = document.getElementById("input-texto").value;
    let resultado = textos(texto);
    document.getElementById("output-caracteres").textContent = resultado;
}

// Ejercicio 2: Agregar elemento al final del array
function elementoFinal(array, elemento) {
    array.push(elemento);
    return `Array resultante: [${array.join(', ')}]`;
}

function ejecutarAgregarElemento() {
    let arrayInput = document.getElementById("input-array").value;
    let elemento = document.getElementById("input-elemento").value;
    let array = arrayInput ? arrayInput.split(",") : [];
    let resultado = elementoFinal(array, elemento);
    document.getElementById("output-array").textContent = resultado;
}

// Ejercicio 3: Eliminar primer elemento de un array
function primerElemento(array) {
    array.shift();
    return `Array resultante: [${array.join(', ')}]`;
}

function ejecutarEliminarPrimero() {
    let arrayInput = document.getElementById("input-array-shift").value;
    let array = arrayInput ? arrayInput.split(",") : [];
    let resultado = primerElemento(array);
    document.getElementById("output-shift").textContent = resultado;
}

// Ejercicio 4: Contar letras en un texto
function conteoLetra(texto, letra) {
    let contadorLetra = 0;
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === letra) {
            contadorLetra++;
        }
    }
    return `La letra "${letra}" aparece ${contadorLetra} veces en el texto "${texto}"`;
}

function ejecutarContarLetras() {
    let texto = document.getElementById("input-texto-contar").value.toLowerCase();
    let letra = document.getElementById("input-letra").value.toLowerCase();
    let resultado = conteoLetra(texto, letra);
    document.getElementById("output-contar").textContent = resultado;
}

// Ejercicio 5: Invertir un texto
function invertirTexto(texto) {
    let invertido = "";
    let i = texto.length;
    while (i > 0) {
        invertido += texto.substring(i - 1, i);
        i--;
    }
    return `Texto invertido: ${invertido}`;
}

function ejecutarInvertirTexto() {
    let texto = document.getElementById("input-texto-invertir").value;
    let resultado = invertirTexto(texto);
    document.getElementById("output-invertir").textContent = resultado;
}

// Ejercicio 6: Eliminar elemento por posición
function eliminarPosicion(array, posicion) {
    if (posicion >= 0 && posicion < array.length) {
        array.splice(posicion, 1);
        return `Elemento eliminado. Array resultante: [${array.join(', ')}]`;
    } else {
        return "Posición inválida";
    }
}

function ejecutarEliminarPosicion() {
    let arrayInput = document.getElementById("input-array-splice").value;
    let array = arrayInput ? arrayInput.split(",") : [];
    let posicion = parseInt(document.getElementById("input-posicion").value);
    let resultado = eliminarPosicion(array, posicion);
    document.getElementById("output-splice").textContent = resultado;
}

// Ejercicio 7: Calculadora básica
function operadores(numero1, numero2, operador) {
    if (isNaN(numero1) || isNaN(numero2)) {
        return "Error: Los números deben ser valores válidos";
    }
    if (!['+', '-', '*', '/'].includes(operador)) {
        return "Error: Operador debe ser +, -, * o /";
    }
    
    switch (operador) {
        case '+':
            return `${numero1} + ${numero2} = ${numero1 + numero2}`;
        case '-':
            return `${numero1} - ${numero2} = ${numero1 - numero2}`;
        case '*':
            return `${numero1} * ${numero2} = ${numero1 * numero2}`;
        case '/':
            if (numero2 === 0) {
                return "Error: No se puede dividir por cero";
            } else {
                return `${numero1} / ${numero2} = ${numero1 / numero2}`;
            }
    }
}

function ejecutarCalculadora() {
    let numero1 = parseFloat(document.getElementById("input-num1").value);
    let numero2 = parseFloat(document.getElementById("input-num2").value);
    let operador = document.getElementById("input-operador").value;
    let resultado = operadores(numero1, numero2, operador);
    document.getElementById("output-calculadora").textContent = resultado;
}

// Ejercicio 8: Extraer parte de un array
function extraerParteArray(array, inicio, fin) {
    return `Parte extraída: [${array.slice(inicio, fin).join(', ')}]`;
}

function ejecutarExtraerParte() {
    let arrayInput = document.getElementById("input-array-slice").value;
    let array = arrayInput ? arrayInput.split(",") : [];
    let inicio = parseInt(document.getElementById("input-inicio").value);
    let fin = parseInt(document.getElementById("input-fin").value);
    let resultado = extraerParteArray(array, inicio, fin);
    document.getElementById("output-slice").textContent = resultado;
}

// Ejercicio 9: Número aleatorio
function numeroAleatorio() {
    return Math.floor(Math.random() * 10) + 1;
}

function ejecutarAleatorio() {
    let respuesta = numeroAleatorio();
    document.getElementById("output-aleatorio").textContent = `Número aleatorio: ${respuesta}`;
}

// Ejercicio 10: Primera letra de un texto
function primeraLetra(texto) {
    if (!texto || texto.trim() === "") {
        return "Ingrese un texto válido";
    } else {
        return `La primera letra es: "${texto.charAt(0)}"`;
    }
}

function ejecutarPrimeraLetra() {
    let texto = document.getElementById("input-texto-primera").value;
    let respuesta = primeraLetra(texto);
    document.getElementById("output-primera").textContent = respuesta;
}