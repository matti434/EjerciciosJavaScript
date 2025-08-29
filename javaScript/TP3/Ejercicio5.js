/*
5- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento.
 A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.
*/

function definir(){

    if(cadena.length===0){
      return "El texto esta vacio esta vacia";
    }
    else if(cadena===cadena.toLowerCase()){
        return "El texto esta todo en minusculas";
    }
    else if(cadena===cadena.toUpperCase()){
        return "El texto esta todo en mayusculas";
    }
    else{
        return "El texto tiene mayusculas y minusculas";
    }
}

let cadena = prompt("Ingrese el texto");
let resultado = definir(cadena);

alert(resultado);