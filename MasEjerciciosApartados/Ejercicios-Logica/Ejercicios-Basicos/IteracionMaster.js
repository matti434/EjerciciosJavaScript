/*
 * Quiero contar del 1 al 100 de uno en uno (imprimiendo cada uno).
 * ¿De cuántas maneras eres capaz de hacerlo?
 * Crea el código para cada una de ellas.
 */

let contador=0;
const intervalo = setInterval(() =>{
    contador++;
    console.log(contador);
    
    if(contador>=100){
        clearInterval(intervalo);
        console.log("¡Llegamos a 100! Intervalo detenido.");
    }
},1000)