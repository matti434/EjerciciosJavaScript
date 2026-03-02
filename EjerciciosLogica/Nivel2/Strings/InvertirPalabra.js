/* Invertir una palabra. */

const word = "Hola como estas ?";

let newWord = "";

for(let i = word.length -1; i >= 0; i--){
    
    newWord += word[i];

}

console.log("Palabra invertida: "+ newWord);
