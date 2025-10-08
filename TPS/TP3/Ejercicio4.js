/*
4- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. 
Mostrar por pantalla el resultado devuelto por la función.
*/

do{
    let numero = parseInt(prompt("Ingrese un numero entero:"));
    
    function ParoImpar(numero) {
        if(isNaN(numero)){
            let resultado="Por favor ingrese un valor valido";
        }
        if (numero % 2 === 0) {
            return `El numero ${numero} es par` ;
        } else {
            return `El numero ${numero} es impar` ;
        }
    }
    let resultado = ParoImpar(numero);
    document.writeln(resultado + "<br>");

}while(confirm("Desea seguir ingresando numeros?"));



