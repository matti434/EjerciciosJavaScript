/*
Escribe un programa que muestre por consola los numneros de 1 a 100 (con un salto de linea entra cada impresion)
sustituyendo los siguientes:

Multiplos de 3 por la palabra "fizz".
Multiplos de 5 por la palabra "buzz".
Multiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".

write a program that/esa display/mostrar the numbers from 1 to 100 on the console (with a linea break between each)
substituting/substituting the following

Multiples of 3 for the word "fizz".
Multiples of 5 for the word "buzz".
Multiples of both 3 and 5 for the word "fizzbuzz".
 */


for(let i=0;i<=100;i++){

    if(i % 3 === 0 && i % 5 === 0){
        console.log(`fizzbuzz`);
    }
    if(i % 3 === 0){
        console.log(`fizz`);
    }
    if(i % 5 === 0){
        console.log(`buzz`);
    }
}