/*
 * Crea una función que evalúe si un/a atleta ha superado correctamente una
 * carrera de obstáculos.
 * - La función recibirá dos parámetros:
 *      - Un array que sólo puede contener String con las palabras
 *        "run" o "jump"
 *      - Un String que represente la pista y sólo puede contener "_" (suelo)
 *        o "|" (valla)
 * - La función imprimirá cómo ha finalizado la carrera:
 *      - Si el/a atleta hace "run" en "_" (suelo) y "jump" en "|" (valla)
 *        será correcto y no variará el símbolo de esa parte de la pista.
 *      - Si hace "jump" en "_" (suelo), se variará la pista por "x".
 *      - Si hace "run" en "|" (valla), se variará la pista por "/".
 * - La función retornará un Boolean que indique si ha superado la carrera.
 * Para ello tiene que realizar la opción correcta en cada tramo de la pista.
 */


function carreraDeOptaculos(){

    const accion=["run" ,"jump","jump","run","run", "jump","run"];
    const pista=[ "-","-", "-" , "|", "-" , "|" , "-"];

    let superoCarrera=true;
    
    for(let i=0;i<accion.length;i++){
        const carrera=accion[i];
        const obstáculos=pista[i];
       
    
        if(carrera === "run"){

            if( obstáculos==="_"){
                console.log("_");

            }
            else{
                console.log("/");
                superoCarrera=false;
                break;
            }
        }
        else if(carrera === "jump"){

            if(obstáculos === "|"){
                console.log("|");

            }
            else{
                console.log("x");
                superoCarrera=false;
                break;
            }
        }
       
    }  
  if(!superoCarrera){
    console.log("No Concretado la carrera");
  }
  else{
    console.log(" Concreto la carrera");
  }
}

carreraDeOptaculos();