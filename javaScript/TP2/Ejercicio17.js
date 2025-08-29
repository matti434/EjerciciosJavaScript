/*
17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.
*/

let texto = prompt("Ingrese la frase:");
let posicion = -1;

for(let i=0; i<texto.length;i++){
    if("aeiou".includes(texto[i])){
        posicion = i + 1;
        break;
    }
}
// va a devolver la posicion sin contar el 0 osea empieza desde 1
if(posicion===-1){
    alert("No se encontraron vocales.");
}
else{
    alert("La primera vocal esta en la posicion: " + posicion);
}