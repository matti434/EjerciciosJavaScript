/*
 **Alarma con `setTimeout`** ⏰
    - El usuario ingresa cuántos segundos quiere esperar.
    
    - Pasado ese tiempo, suena un `alert("¡Se acabó el tiempo!")`.
*/

function despertador(){
    let inputSegundos=prompt("Ingrese cuantos segundos decea esperar");

 
    if(inputSegundos === null){
        console.warn("Saliendo del programa");
        return null;
    }
    if(inputSegundos.trim()===""){
        console.warn("No ingrese valores vacios");
        return;
    }

    let segundos=parseInt(inputSegundos);

    if(isNaN(segundos)|| segundos<=0){
        console.warn("Ingrese numeros validos");
        return;
    }

    console.log(`Tiempo configurado para ${segundos} segundos`);

    let contador=segundos;
    // Iniciamos el intervalo aqui
    const intervalo=setInterval(()=>{
        contador--
        console.log("Segundos:"+contador);

        if(contador<=0){
            clearInterval(intervalo);
             //console.log("¡Se acabó el tiempo!");
             //En realidad podria solo usar el console.log del if creo que el codigo estaria mas limpio y facil ya que no usaria lo de mas abajo
        }
    },1000);

    // configurar la alarma
    setTimeout(()=>{
        // podemos detenerlo con clearInterval
        clearInterval(intervalo); // El intervalo se detiene
        console.log("Se acabo el tiempo");
    }, segundos*1000);
    // Después de segundos * 1000 milisegundos (la cantidad de segundos que ingresó el usuario)
}

