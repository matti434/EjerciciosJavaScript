/*
Nivel Pomodoro (mini-proyecto)

- [ ] Pide al usuario con `prompt()` cuántos segundos quiere estudiar.
    
    - Usa `setInterval` para descontar el tiempo.
        
    - Al llegar a 0, muestra `"¡Hora de descansar!"`.
        
    - agrega una fase de descanso después del estudio (ej: 5 seg de estudio → 3 seg de descanso).
*/

function iniciarPomodoro() {
  let inputSegundos = prompt("Ingrese cuantos segundos quiere estudiar:");

  if (inputSegundos === null) {
    console.log("Saliendo del programa...");
    return null;
  }
  if (inputSegundos.trim() === "") {
    console.log("No ingrese valores vacios");
    return;
  }

  let segundosEstudio = parseFloat(inputSegundos);

  if (isNaN(segundosEstudio) || segundosEstudio <= 0) {
    console.error("Por favor ingrese numeros validos");
    return;
  }

  let opcionTiempoDescanso = confirm(
    "Desea ingresar el tiempo de descanso o si prefiere el predefinido de 60% del tiempo de estudio"
  );

  let tiempoDescanso;
  if ((opcionTiempoDescanso === true)) {
    let inputTiempoDescanso = prompt(
      "Ingrese los segundos que desea descansar:"
    );

    if (inputTiempoDescanso === null) {
      console.log("Saliendo del programa...");
      return null;
    }
    if (inputTiempoDescanso.trim() === "") {
      console.log("No ingrese valores vacios");
      return;
    }

    tiempoDescanso = parseFloat(inputTiempoDescanso);

    if (isNaN(tiempoDescanso) || tiempoDescanso <= 0) {
      console.error("Por favor ingrese numeros validos");
      return;
    }
  }
  else{
    // math.floor redondea hacia abajo al nuimero mas cercano.
    // math.max(5,...) Toma el valor máximo entre dos números,Garantiza mínimo 5 segundos de descanso,Si el cálculo da menos de 5, usa 5
    let segudosDescanso=Math.max(5,Math.floor(segundosEstudio * 0.6));
  }
  console.log(`Configuracion Pomodoro : -Tiempo de estudio ${formatearTiempo(segundosEstudio)} - Tiempo de descanso ${formatearTiempo(tiempoDescanso)} `);


   iniciarFaseEstudio("Estudio",segundosEstudio,()=> {
      // al terminar estudio sigue descando;
      console.log("Hora de descanzar");
      iniciarFaseDescanso("Descanso",segundos,()=>{
        console.log("Sesion Pomodoro completa");
      })
   })

  function formatearTiempo(segundosEstudio){
    if(segundosEstudio>=3600){
        //formato con horas,minutos y segundos
        const horas=Math.floor(segundosEstudio/3600) // 1 hora=3600
        const minutos=Math.floor((segundosEstudio % 3600)/60) // resto convertido a minutos
        const segs = Math.floor(segundosEstudio % 60); // segundos restantes
        return `${horas}h  ${minutos}m ${segs}s`;
    }
    else if(segundosEstudio>=60){
        const minutos=Math.floor(segundosEstudio/60);
        const segs=Math.floor(segundosEstudio % 60);
        return `${minutos}m ${segs}s`;
    }
    else{
        return `${segundos}`;
    }
  }
}

  // nombre: String con el nombre de la fase("Estudio, Descanso")
  // callbackFinalizacion funcion que se ejecutara cuando termine el tiempo
  function iniciarFase(nombre,segundosEstudio,callbackFinalizacion){
     let tiempoRestante=segundosEstudio;
     const fase=nombre.toLowerCase();

     const intervalo = setInterval(()=>{
        tiempoRestante--;

        console.log(`Tiempo: ${formatearTiempo(tiempoRestante)}`);

        if(tiempoRestante<=0){
            clearInterval(intervalo);
            console.log(`La fase ${nombre} a terminado`);
        }
     },1000);
  }


  iniciarPomodoro();