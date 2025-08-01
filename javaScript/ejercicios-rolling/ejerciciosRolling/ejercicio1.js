/*let nombre = prompt("Ingrese el nombre de usuario"); 


alert(`Hola ${nombre}`); //batik


let numero1= parseInt(prompt("Ingrese el primer numero "));
let numero2= parseInt(prompt("Ingrese el segundo numero "));
alert(`El resultado de la suma es ${resultado=numero1+numero2}`);

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


let a = parseInt(prompt("ingrese el numero"))

if(a % 2 == 0){
    alert("si es divisible");
}else{
    alert("no es divisible");
}

*/

let frase = prompt("ingrese la frase: ");


let vocales = "";

for(let i = 0; i <= frase.length;i++){
   let letra = frase.charAt(i);   // obtenemos la letra en la posicion i
   
   if("aeiou".includes(letra)){
    vocales += letra; // le agregamos a la variable vocales;
   }
}
 alert(`Las vocales que aparecen el ${vocales}`);



