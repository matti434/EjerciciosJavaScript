/* Encontrar el menor */


const array = [223, 456, 452, 675, 345, 976, 23];

let menor = array[0];

for (let i = 0; i < array.length; i++) {
 
    let valor = array[i];
    
    if(valor < menor){
        menor = valor
    }
}

console.log("El menor final es: " + menor);
