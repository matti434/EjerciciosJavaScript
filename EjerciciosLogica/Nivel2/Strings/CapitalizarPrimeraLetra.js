/* Capitalizar primera letra de cada palabra. */ 

const word = "hola mundo javascript"
const arrayText = word.split(" ");

for(let i = 0; i < arrayText.length; i++){

    let firstLetter = arrayText[i];
    arrayText[i] = firstLetter[0].toLocaleUpperCase() + firstLetter.slice(1).toLocaleLowerCase();
    
}
let resultado = arrayText.join(" ");
console.log(resultado);
