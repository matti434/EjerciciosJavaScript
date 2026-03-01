/* Determinar si un numero es negativo , positivo o cero */


const numero = parseInt(process.argv[2]);

if(numero > 0){
    console.log("El numero es mayor a cero");
}
else if(numero === 0){
    console.log("El numero es cero");
}
else if(numero < 0){
    console.log("El numero es negativo");
}