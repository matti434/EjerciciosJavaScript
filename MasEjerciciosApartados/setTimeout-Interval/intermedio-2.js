/*
Crea un semáforo con console.log que muestre:

"🔴 Rojo" (2 seg)

"🟡 Amarillo" (1 seg)

"🟢 Verde" (3 seg)
Repite el ciclo con setInterval.
*/
let contador=1;
const intervalo = setInterval(()=>{
    contador++;
    console.log(`Contador: ${contador}`);

    if(contador===1){
        console.log("Semaforo en 🟡 Amarillo");
    }
    if(contador === 2){
        console.log("Semaforo en 🔴 Rojo");
    }
    if(contador === 3){
        console.log("Semaforo en 🟢 Verde");
    }
}) 