/* Contar vocales en un texto.*/

const text = "Hola como estas";

const voices = ["a","e","i","o","u"];
let counter = 0;

for (let i = 0; i < text.length; i++) {
       
    let element = text[i];
    
    for(let j = 0; j < voices.length; j++){
       
        if(voices[j] === element.toLocaleLowerCase()){
            counter++;
        }
    }
}

console.log("La cantidad de vocales es: "+counter);

