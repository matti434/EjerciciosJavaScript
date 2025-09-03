/*
 **Frases automáticas**  
   Crea un array con frases motivadoras.  
   Cada 3 segundos, muestra una frase diferente en pantalla hasta que se acaben.  

  Aquí necesitarás `setInterval` y `clearInterval` para detener cuando termine el array.
*/

const frasesMotivadoras = [
    "Tú puedes lograr todo lo que te propongas",
    "Cada día es una nueva oportunidad",
    "El esfuerzo de hoy es el éxito de mañana",
    "No te rindas, los mejores resultados llegan con perseverancia",
    "Cree en ti mismo y llegarás lejos",
    "Cada pequeño paso te acerca a tu meta",
    "La actitud positiva es el secreto del éxito"
];

let indice=0; //Empezamos desde el primer elemento
const intervalo=null;

function mostrarProximaFrase(){
    console.log(`Frase ${indice+1} : ${frasesMotivadoras[indice]}`);

    indice++;

    // verifica si hemos llegado al final del array
    if(indice>=frasesMotivadoras.length){
        clearInterval(intervalo);//Detener el intervalo
        console.log("Todas las frases se mostraron");
    }
}
//inicar el intervalo que se ejecutará cada 3 segundos
intervalo=setInterval(mostrarProximaFrase,3000);

// llamamos para que se ejecute la primera frase ya que arriba lo que hace es que inicia recien a los 3 segundos.
mostrarProximaFrase()
