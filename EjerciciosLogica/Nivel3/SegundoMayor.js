/* Encontrar el segundo número mayor. */

const numbers = [2, 5, 6, 77, 4, 6, 7, 8, 5];

let Max = numbers[0];
let SecMax = 0;
let Min = numbers[0];
for (let index = 0; index < numbers.length; index++) {

    const element = numbers[index];


    if (element > Max) {
        SecMax = Max;
        Max = element;
    }
    else if(element > SecMax){
        SecMax = element
    }
    else if (element < Min) {
        Min = element;
    }

}

console.log(" El menor numero es: " + Min + " El mayor numero: " + Max + " El segundo mayor numero es: " + SecMax);
