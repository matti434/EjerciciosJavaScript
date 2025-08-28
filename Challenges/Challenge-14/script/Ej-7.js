/*
Calculadora básica con switch:
Crea una función que reciba dos números y un operador (+, -, *, /). Devuelva el resultado de la operación. Si el operador no es válido, mostrar error.
*/

function operadores(numero1,numero2,operador){
    if(isNaN(numero1) || isNaN(numero2) || numero1 === null || numero2 === null){
         return "Error: Los números deben ser valores válidos";
    }
     if (!['+', '-', '*', '/'].includes(operador)) {
        return "Error: Operador debe ser +, -, * o /";
    }
    switch(operador) {
        case '+':
            return numero1 + numero2;
        case '-':
            return numero1 - numero2;
        case '*':
            return numero1 * numero2;
        case '/':
            if(numero2 === 0){
                return `no puede divisirde en 0`;
            }
            else{
                return numero1 / numero2;
            }
    }

}
let numero1=parseFloat(prompt("Ingrese el primero numero:"));
let numero2=parseFloat(prompt("Ingrese el segundo numero:"));
let operador=prompt("Por favor ingrese un operador (+,-,*,/)");
let resultado=operadores(numero1,numero2,operador);
console.log(resultado);