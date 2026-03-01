/* Eliminar duplicados */

const array = [2,53,6,3,7,4,2,6,8,2,6,8,4,2,35,7];

for( let i = 0; i < array.length; i++){
    
    let numero = array[i];

    for(let j = 0; j < i ; j++){
        
        if(array[i] === array[j]){
            array.splice(j,1);
            j--;
        }
    }
}

console.log(array);
