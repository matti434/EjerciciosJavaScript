/*
 * Crea un programa se encargue de transformar un número
 * decimal a binario sin utilizar funciones propias del lenguaje que lo hagan directamente.
 */

function decimalBinario(numero){

    const binario=[];
    while(true){
        resultadoResto = numero % 2;
        nuevoNumero = numero/2;
        if(nuevoNumero / 2 !==0){
            if(resultadoResto === 0){
                binario.push(resultadoResto);
            }
            else{
                binario.push(1);
            }
        }
        else{
            false;
            return binario;
        }
        numero = Math.floor(nuevoNumero);
    }
    

}

console.log(decimalBinario(28));
