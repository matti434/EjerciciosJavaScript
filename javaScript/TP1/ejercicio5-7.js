/*
// Ejercicio 5
let numero1 = parseInt(prompt("Ingrese el primer numero "));
let numero2 = parseInt(prompt("Ingrese el segundo numero "));
alert(`El resultado de la suma es ${(resultado = numero1 + numero2)}`);

// Ejercicio 6
let a = parseInt(prompt("ingrese numero"));
    let b = parseInt(prompt("ingrese el otro numero"));

    if (a > b) {
    alert(`El primer numero ingresado es ${a} es mas grande que el segundo ${b}`);
    }
    else if(a=b) {
    alert(`ambos numeros son iguales`);
    }
    else{
    alert(`El segundo numero ingresado es ${b} es mas grande que el primero ${a}`);
    }
*/
// Ejercicio 7
    let a = parseInt(prompt("ingrese el primer numero: "));
    let b = parseInt(prompt("ingrese el segundo numero: "));
    let c = parseInt(prompt("ingrese el tercer numero: "));

    if(a>b && a>c){
    alert("el mayor es A");
    }else if(b>a && b>c){
    alert("el mayor es B");
    }
    else{
    alert("el mayor es C");
    }