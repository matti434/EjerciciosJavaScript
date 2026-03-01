/* Encontrar el número mayor en un array. */


const array = [ 21,30,41,22,100,101,606,405];


let mayor = 0;

for(let i=0; i<array.length;i++){
    let valor = array[i];
    console.log("El valor:"+valor);
    
    if(mayor <= valor){
      mayor=valor;
    }
}

console.log("El mayor numero es:"+ mayor);
