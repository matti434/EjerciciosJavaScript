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
let ultimoCambio = Date.now();
let proximoCambio = tiempoPorEstado[estado];

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
    const ahora = Date.now();
    
    if (ahora - ultimoCambio >= proximoCambio) {
        // Cambiar al siguiente estado
        estado = (estado + 1) % 3;
        ultimoCambio = ahora;
        proximoCambio = tiempoPorEstado[estado];
        
        // Mostrar el nuevo estado
        mostrarSemaforo();
    }
}, 100); // Verificar cada 100ms

// Para detener el semáforo después de un tiempo (ejemplo: 30 segundos)
setTimeout(() => {
    clearInterval(intervalo);
    console.log("Semáforo detenido después de 30 segundos");
}, 30000);