/* Contar cuántas veces aparece un elemento */

const array = [2,53,6,3,7,4,2,6,8,2,6,8,4,2,35,7];

let elemento = 7;
let cantidad = 0;
for(let i = 0; i < array.length; i++){

    if(elemento === array[i]){
     cantidad++;
    }
}

console.log("El elemento: " + elemento +" Se repite: "+cantidad+" de veces");
