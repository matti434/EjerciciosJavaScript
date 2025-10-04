// Calcula el factorial de un número usando recursión

const numero = 6;


function factorial(numero){

    if(numero<=1){
        console.log("No puede ser menor o igual 1");
        return 1; // SOLUCIÓN: return con valor
    }
    else{
       return numero*factorial(numero-1);
    }
}

console.log(factorial(numero));
