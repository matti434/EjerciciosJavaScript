/* Sumar todos los valores */

const array = [23,552,76,4,46,2,4,67,43];

let total = 0;

for(let i = 0; i < array.length;i++){

    let valor = array[i];
    total += valor;
    console.log("Suma actual,numero actual: "+ valor +" total: "+total);
    
}

console.log("El total es: "+total);
