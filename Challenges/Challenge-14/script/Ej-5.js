/*
Invertir un texto:
Crea una función que reciba un texto y lo devuelva invertido usando un while y .substring() o .charAt().
*/

function invertirTexto(texto){
      let invertido="";
      let i=texto.length;
      while(i>0){
        invertido+=texto.substring(i-1,i);
        i--
      }
      return invertido;

}

let texto=prompt("Por favor ingrese el texto:");
let resultado=invertirTexto(texto);
console.log(resultado);
