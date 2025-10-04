/*
 * Crea una función que reciba días, horas, minutos y segundos (como enteros)
 * y retorne su resultado en milisegundos.
 */
function convertirAMilisegundos(dias = 0, horas = 0, minutos = 0, segundos = 0) {
    return (
        (dias * 24 * 60 * 60 * 1000) +
        (horas * 60 * 60 * 1000) +
        (minutos * 60 * 1000) +
        (segundos * 1000)
    );
}

// Ejemplos con parámetros opcionales:
console.log(convertirAMilisegundos(1));           // Solo días
console.log(convertirAMilisegundos(0, 2, 30));    // Solo horas y minutos
console.log(convertirAMilisegundos());            // Todos en 0