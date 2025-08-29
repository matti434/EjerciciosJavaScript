/*
Crea una función que reciba un string y devuelva la cantidad de vocales que contiene.
*/

function contarVocales(texto) {
    const vocales = "aeiou";
    let contador = 0;
    
    for (let i = 0; i < texto.length; i++) {
        if (vocales.includes(texto[i])) {
            contador++;
        }
    }
    return contador;
}

let texto = "Hola mundo mirudev".toLowerCase();
let resultadoVocales = contarVocales(texto);
console.log(resultadoVocales);