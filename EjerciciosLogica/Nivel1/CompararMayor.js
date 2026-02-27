/* Comparar dos numeros y mostrar el mayor */

const numero1 = parseInt(process.argv[2]);
const numero2 = parseInt(process.argv[3]);

if(numero1 > numero2){
    console.log(`El numero ${numero1} es mayor que el numero ${numero2}`);
    
}
else if( numero1 === numero2){
   console.log("El numero 1 y 2 ingresados son iguales");
}
else if(numero1 < numero2){
    console.log(`El numero ${numero2} es mayor que el numero ${numero1}`);    
}
