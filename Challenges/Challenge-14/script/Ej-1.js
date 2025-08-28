/*
Contar caracteres de un texto:
Crea una función que reciba un texto y muestre cuántos caracteres tiene usando .length.
*/
function textos(texto){
    if(!texto || texto.trim() ===""){
        return("Por favor ingrese valor valido:");
    }
    else{
     return  `El texto tiene ${texto.length} caracteres` 
    }
}

let texto=prompt("Por favor ingrese el texto");

let resultado=textos(texto);
document.writeln(resultado);
