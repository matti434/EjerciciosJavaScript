/* Mostrar tabla de multiplicar de un número. */

const numero = parseInt(process.argv[2]);

for(let i=1; i<=10;i++){
    console.log(`${numero} x ${i} = ${numero*i}`);
}

let multiplicacion = 1;

while(multiplicacion <=10){
   console.log(`Con while: ${numero} x ${multiplicacion}= ${numero*multiplicacion}`);
   multiplicacion++;
}