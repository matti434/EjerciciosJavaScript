/*
 * Crea un programa que invierta el orden de una cadena de texto
 * sin usar funciones propias del lenguaje que lo hagan de forma automática.
 * - Si le pasamos "Hola mundo" nos retornaría "odnum aloH"
 */

function invertirCadena(cadena){

    let nuevaCadena=[];
    for(let i=cadena.length-1;i>=0;i--){
        nuevaCadena += cadena[i];
        //nuevaCadena.push(cadena[i]);
        //console.log(cadena[i]);
    }
    return nuevaCadena;
    /*
    for(let j=nuevaCadena.length;j>nuevaCadena.length;j--){
       cadenaAlrevez=
    }
    */
    
}

console.log(invertirCadena("Hola mundo"));