/*
Crea un semáforo con console.log que muestre:

"🔴 Rojo" (2 seg)

"🟡 Amarillo" (1 seg)

"🟢 Verde" (3 seg)
Repite el ciclo con setInterval.
*/
// Semáforo con setInterval
let estado = 0; // 0: Rojo, 1: Amarillo, 2: Verde
let tiempoPorEstado = [2000, 1000, 3000]; // Tiempos para cada estado
let ultimoCambio = Date.now(); // Marca de tiempo del ultimo cambio
let proximoCambio = tiempoPorEstado[estado]; // Tiempo que debe durar el estado actual

function mostrarSemaforo() {
    switch(estado) {
        case 0:
            console.log("🔴 Rojo");
            break;
        case 1:
            console.log("🟡 Amarillo");
            break;
        case 2:
            console.log("🟢 Verde");
            break;
    }
}

// Mostrar el estado inicial
mostrarSemaforo();

// Usar setInterval para verificar cuándo cambiar de estado
const intervalo = setInterval(() => {
    const ahora = Date.now(); // Optenemos la hora actual
    
    //Verificamos si ha pasado el tiempo suficiente para cambiar
    if (ahora - ultimoCambio >= proximoCambio) {
        // Cambiar al siguiente estado
        estado = (estado + 1) % 3;  // Avanza al siguiente estado (0-1-2-0-1...)
        ultimoCambio = ahora; // Reinicia el contador de tiempo
        proximoCambio = tiempoPorEstado[estado]; // Establece el nuevo tiempo a esperar
        
        // Mostrar el nuevo estado
        mostrarSemaforo(); //Muestra el nuevo estado
    }
}, 100); // Verificar cada 100ms

// Para detener el semáforo después de un tiempo (ejemplo: 30 segundos)
setTimeout(() => {
    clearInterval(intervalo);
    console.log("Semáforo detenido después de 30 segundos");
}, 30000);

/*Ejemplo del flujo:

Empieza en Rojo (estado 0, 2000ms)

Cada 100ms verifica: ¿han pasado 2000ms desde el último cambio?

Cuando pasan 2000ms → cambia a Amarillo (estado 1, 1000ms)

Cada 100ms verifica: ¿han pasado 1000ms desde el último cambio?

Cuando pasan 1000ms → cambia a Verde (estado 2, 3000ms)

Y así sucesivamente...*/