/* Mostrar si un numero es par o impar */


const numero = parseInt(process.argv[2]);


if(numero % 2 === 0){
    console.log("El numero ingresado es par");
}else{
    console.log("El numero ingresado es impar");
}
