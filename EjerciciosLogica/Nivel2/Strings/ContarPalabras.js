/* Contar palabras en una frase. */

const word = "hola mundo javascript";
let IsWord = false;
let contador = 0;
for (let i = 0; i < word.length; i++) {
    
    let caracter = word[i];
     
    if(caracter === " "){
      contador++;
      enPalabra= false;
    }
    else{
        enPalabra = true;
    }

}
if(enPalabra) contador++;

console.log("La cantidad de palabras en la frase es de: "+ contador);
