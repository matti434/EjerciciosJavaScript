/*
7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22
1

*/

let numero = parseInt(prompt("ingrese un numero no mayor a 50:"));
do{

    if(numero>50 || numero<0){
        alert("El numero ingresado es mayor a 50 o menor a 0");
        break;
    }
    else{
        for(let i=numero;i>=0;i--){
           linea="";
           for(let j=1;j<=i;j++){
            linea+=i;
           }
           console.log(linea);
        }
        break;
    }
}while(true)