/*
Contar cuántas veces aparece una letra en un texto:
Crea una función que reciba un texto y una letra, y cuente cuántas veces aparece usando un for.
*/

function conteoLetra(texto,letra){
    let contadorLetra=0;
    for(let i=0;i<=texto.length;i++){
        if(texto[i] === letra){
            contadorLetra++;
        }
    }
    return `La letra: ${letra} aparece: ${contadorLetra}-veces en el texto ${texto}`;
}

let texto=prompt("Ingrese un texto").toLowerCase();
let letra=prompt("Por favor ingrese la letra:").toLowerCase();
let resultado=conteoLetra(texto,letra);
console.log(resultado);