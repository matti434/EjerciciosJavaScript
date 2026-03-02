/* Verificar si es palíndromo. */

let text = "Matias";
let newText = "";

for(let i = text.length - 1; i >= 0 ; i--){

     newText += text[i]
}

if(newText === text){
    console.log("La palabra es palindroma: "+ newText);
}
else{
    console.log("No es palidroma: "+text+ " / "+ newText);
}